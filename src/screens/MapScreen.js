import React, {useContext, useState} from 'react'; 
import { Text, StyleSheet, View, Image} from 'react-native'; 
import AppContext from '../hooks/AppContext';
import MapView, { Heatmap, PROVIDER_GOOGLE } from 'react-native-maps';
import { createIconSetFromFontello } from 'react-native-vector-icons';

const MapScreen = () => {
    //const myContext = useContext(AppContext);
    /*
    const [image, setImage] = useState(null); 

    const points = [
        { latitude: 40.7828, longitude: -74.0065, weight: 1 },
        { latitude: 41.7121, longitude: -74.0042, weight: 1 },
        { latitude: 40.7102, longitude: -75.0060, weight: 1 },
        { latitude: 40.7123, longitude: -74.0052, weight: 1 }
    ]

    
    const state = {
        initialPosition: {
          latitude: 40.7143,
          longitude: -74.0042,
          latitudeDelta: 0.09,
          longitudeDelta: 0.035
        }
    }
    */
    /*
    (async () => {
        let url = `https://tile.openweathermap.org/map/precipitation_new/127/256/256.png?appid=9e1e88fe70560be4b32d4e47963c62ca`;
        console.log(url); 
        let response = await fetch(url);
        let data = await response.text();
        console.log(data);
        //setData(data); 
    })();
    */  

    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          ref={map => _map = map}
          style={styles.map}
          initialRegion={state.initialPosition}>
          <Heatmap
            points={points}
            radius={40}
            opacity={1}
            gradient={{
              colors: ["black", "purple", "red", "yellow", "white"],
              startPoints: Platform.OS === 'ios' ? [0.01, 0.04, 0.1, 0.45, 0.5] :
                [0.1, 0.25, 0.5, 0.75, 1],
              colorMapSize: 2000
            }}
          >
          </Heatmap>
        </MapView>
      </View>
    ); 
};

/*
<View style={styles.container}>
          <MapView
            provider={PROVIDER_GOOGLE}
            ref={map => _map = map}
            style={styles.map}
            initialRegion={state.initialPosition}>
            <Heatmap
              points={points}
              radius={40}
              opacity={1}
              gradient={{
                colors: ["black", "purple", "red", "yellow", "white"],
                startPoints: Platform.OS === 'ios' ? [0.01, 0.04, 0.1, 0.45, 0.5] :
                  [0.1, 0.25, 0.5, 0.75, 1],
                colorMapSize: 2000
              }}
            >
            </Heatmap>
          </MapView>
        </View>
*/ 


const styles = StyleSheet.create({
    tinyLogo: {
        width: 256,
        height: 256,
    },
    container: {
        marginVertical: 50
    }, 
    item: {
        padding: 20, 
        marginVertical: 8, 
        marginHorizontal: 16, 
    }, 
    title: {
        fontSize: 32, 
    }, 
    container: {
        ...StyleSheet.absoluteFillObject
    },
    map: {
        ...StyleSheet.absoluteFillObject
    }
}); 

export default MapScreen; 