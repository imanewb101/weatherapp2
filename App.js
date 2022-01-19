

import React, { useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import * as Location from 'expo-location';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import CurrentScreen from './src/screens/CurrentScreen';
import HourlyScreen from './src/screens/HourlyScreen';
import AppContext from './src/hooks/AppContext';
import data from './src/api/data';
import MapScreen from './src/screens/MapScreen'; 
import DailyScreen from './src/screens/DailyScreen'; 

const Tab = createMaterialBottomTabNavigator(); 

const App = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const exclude = ['minutely','daily','alerts']; 
  //const appid = "34e219b99afcae139bb30f6647379695"; this is the other account where they blocked the account for too many calls, not paying 
  const appid = "9e1e88fe70560be4b32d4e47963c62ca";

  //const [data, setData] = useState(''); 
  const [hourly, setHourly] = useState(''); 
  const [current, setCurrent] = useState('');
  const [daily, setDaily] = useState('');
  
  const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);

  const CheckIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();

    if (!enabled) {
      Alert.alert(
        'Location Service not enabled',
        'Please enable your location services to continue',
        [{ text: 'OK' }],
        { cancelable: false }
      );
    } else {
      setLocationServiceEnabled(enabled);
    }
  };

  useEffect(() => {
    /*
    CheckIfLocationEnabled();
    let text = "";
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      if (errorMsg) {
        text = errorMsg;
      } else if (location){  
        text = JSON.stringify(location);
        (async () => {
          let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${location.coords.latitude}&lon=${location.coords.longitude}&exclude=${exclude}&appid=${appid}`;
          console.log(url); 
          let response = await fetch(url);
          let data = await response.json();
          //setData(data); 
          setHourly(data["hourly"]); 
          setCurrent(data["current"]); 
        })();
      }
    })(); 

    https://api.openweathermap.org/data/2.5/onecall?lat=40.1129&lon=-74.7716&appid=9e1e88fe70560be4b32d4e47963c62ca

    https://api.openweathermap.org/data/2.5/onecall?lat=${location.coords.latitude}&lon=${location.coords.longitude}&exclude=${exclude}&appid=${appid}


    */
    setHourly(data["hourly"]); 
    setCurrent(data["current"]);
    setDaily(data["daily"]); 
    

  }, []);
  return(
    <AppContext.Provider value={{hourly, current, daily}}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="HourlyScreen">
          <Tab.Screen 
            name="Hourly" 
            component={HourlyScreen}
          />
          <Tab.Screen 
            name="Current" 
            component={CurrentScreen} 
          />
          <Tab.Screen 
            name="Daily"
            component={DailyScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}
/*
const styles = StyleSheet.create({
  container: {
    marginVertical: 50
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
});
*/
export default App;
