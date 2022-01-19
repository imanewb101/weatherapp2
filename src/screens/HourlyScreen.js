import React, {useContext} from 'react'; 
import { Text, StyleSheet, FlatList} from 'react-native'; 
import moment from 'moment';
import AppContext from '../hooks/AppContext';


const HourlyScreen = () => {
    const myContext = useContext(AppContext);

    const convertKtoF = (k) => {
        const celsius = k - 273; 
        return Math.floor(celsius * (9/5) + 32);
    }

    return(
        <FlatList 
            keyExtractor={d => d.dt.toString()}
            data={myContext.hourly}
            renderItem={({item}) => {
                return <Text style={styles.container}>Time: {moment.unix(item.dt).format('h A')} || Clouds: {item.weather[0].description} || Temp: {convertKtoF(item.temp)} FeelsLike: {convertKtoF(item.feels_like)}</Text>
            }}
        />    
    );
};

const styles = StyleSheet.create({
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
}); 

export default HourlyScreen; 