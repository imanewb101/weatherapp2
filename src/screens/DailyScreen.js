import React, {useContext, useState} from 'react'; 
import { Text, StyleSheet, FlatList} from 'react-native'; 
import moment from 'moment';
import AppContext from '../hooks/AppContext';


const DailyScreen = () => {
    const myContext = useContext(AppContext);
    const [day,setDay] = useState(""); 
    //moment.unix(data.current.dt).format('h:mm A')

    const currentdate = new Date();
    
    const datetime = "Current Date " + currentdate.getDate() + "/"
                + "Current Month " + (currentdate.getMonth()+1)  + "/" 
                + "Current Day {0-6} " + currentdate.getDay();

    //console.log(datetime);

    const returnDay = (day) => {
        //const milliseconds = day * 1000; 

        const dateObject = new Date(day * 1000); 

        //const hDF = dateObject.toLocaleString(); 

        //console.log(dateObject.getDate()); 
        //console.log(dateObject.getMonth()+ 1); 
        //console.log(dateObject.getDay()); 
        let d; 
        switch(dateObject.getDay()) {
            case 0: 
                d = "S";
                break; 
            case 1: 
                d = "M";
                break; 
            case 2: 
                d = "T";
                break; 
            case 3: 
                d = "W";
                break; 
            case 4: 
                d = "T";
                break; 
            case 5: 
                d = "F";
                break; 
            case 6: 
                d = "S";
                break;     
        }    
        return {
            _d: d, 
            _date: dateObject.getDate()
        }; 
        
    }

    returnDay(1626436800); 

    const convertKtoF = (k) => {
        const celsius = k - 273; 
        return Math.floor(celsius * (9/5) + 32);
    }


    return(
        <FlatList 
            keyExtractor={d => d.dt.toString()}
            data={myContext.daily}
            renderItem={({item}) => {
                return (
                    <Text style={styles.container}>
                        Weather: {item.weather[0].main} || 
                        MinTemp: {convertKtoF(item.temp.min)}|| 
                        MaxTemp: {convertKtoF(item.temp.max)}|| 
                        %: {Math.round(item.pop)} || 
                        Day: {returnDay(item.dt)._d} ||
                        Date: {returnDay(item.dt)._date}
                    </Text>
                );
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

export default DailyScreen; 
