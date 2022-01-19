import React, {useContext} from 'react'; 
import { View,Text, StyleSheet, ImageBackground} from 'react-native'; 
import AppContext from '../hooks/AppContext';
import moment from 'moment';
import night2 from '../../assets/night2.png'; 

const CurrentScreen = () => {
    const data = useContext(AppContext);

    const convertKtoF = (k) => {
        const celsius = k - 273; 
        return Math.floor(celsius * (9/5) + 32);
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/jpg.jpg')} resizeMode="cover" style={styles.image}> 
                <Text style={styles.title}>Time: {moment.unix(data.current.dt).format('h:mm A')}</Text>
                <Text style={styles.title}>Temp: {convertKtoF(data.current.temp)}°</Text>
                <Text style={styles.title}>Feels like: {convertKtoF(data.current.feels_like)}°</Text>
                <Text style={styles.title}>Humidity: {Math.round(data.current.humidity)}%</Text>
                <Text style={styles.title}>Wind S: {Math.round(data.current.wind_speed)} mph</Text>
                <Text style={styles.title}>Rise: {moment.unix(data.current.sunrise).format('h:mm A')}</Text>
                <Text style={styles.title}>Set: {moment.unix(data.current.sunset).format('h:mm A')}</Text>
            </ImageBackground>
        </View>
    ); 
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff', 
        //alignItems: 'center', 
        justifyContent: 'center'
    }, 
    item: {
        padding: 20, 
        marginVertical: 8, 
        marginHorizontal: 16, 
    }, 
    title: {
        fontSize: 32, 
        paddingBottom: 32,
        color: 'white'
    }, 
    image: {
        flex: 1, 
        justifyContent: "center"
    }
}); 


export default CurrentScreen; 