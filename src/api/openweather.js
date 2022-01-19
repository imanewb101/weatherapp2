import axios from 'axios'; 
//https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

const openWeather = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5", 
});
//base url, the baseURL can be used for any different api call, for now we're using the /onecall for our information 
export default openWeather; 


/*
    const exclude = ['minutely','daily','alerts']; 
    const appid = "34e219b99afcae139bb30f6647379695"; 
     //data for flatlist 

    const [error, setError] = useState(); //error state 
    const [location, setLocation] = useState(); //long, lat 
    const [errorMsg, setErrorMsg] = useState(null); 
    const [current, setCurrent] = useState(null); 
    const [hourly, setHourly] = useState(null); //two seperate state variables, one for the current screen and one for the hourly screen 

          /*
          fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=${exclude}&units=imperial&appid=${appid}`)
                    .then((response) => response.json())
                    .then((data) => {
                        if(isMounted) {
                            setCurrent(data["current"]); 
                            setHourly(data["hourly"]);
                            console.log("Open weather api has been called"); 
                            //setData(data[key]); 
                            //console.log("dasfasddsafsdfds");
                        }
                        return () => {isMounted = false}; 
                    }).catch(error => setError(error)); 
              */      



    /*
    if (!navigator.geolocation) {
        setError('Geolocation is not supported'); 
        return; 
    }
    */
    /*
    const callApi = () => {
        let isMounted = true;
        if (!navigator.geolocation) {
            setError('Geolocation is not supported'); 
            return; 
        }
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setLocation({
                    latitude, 
                    longitude
                }); 
                //api call to recieve hourly weather data
                fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=${exclude}&units=imperial&appid=${appid}`)
                    .then((response) => response.json())
                    .then((data) => {
                        if(isMounted) {
                            setCurrent(data["current"]); 
                            setHourly(data["hourly"]);
                            console.log("Open weather api has been called"); 
                            //setData(data[key]); 
                            //console.log("dasfasddsafsdfds");
                        }
                        return () => {isMounted = false}; 
                    }).catch(error => setError(error)); 
                    },
            (error) => {
        });    
        
    };
    

    return [location, errorMsg, text];
    
*/
