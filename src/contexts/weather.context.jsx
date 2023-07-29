import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const WeatherContext = createContext();

const WeatherProvider = ({children}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const toggleModal = () => setModalIsOpen(!modalIsOpen);

    const [searchLocation, setSearchLocation] = useState([]);

    const getStoredData = () => {
        const data = JSON.parse(localStorage.getItem('weatherData'));
        if(data){
            return data
        }else{
            return []
        }
    }
    
    const [storedData, setStoredData] = useState(getStoredData())

    
    const getWeather = async (location) => {
        searchLocation.push(location);
        const dummyData = storedData;
        console.log("Input in context",location)
        const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=dd5fec9dacb84141a3862335232507&q=${location}&days=1&aqi=yes&alerts=yes`);
        dummyData.push(response.data)
        localStorage.setItem('weatherData',JSON.stringify(dummyData))
        setStoredData([...storedData],response.data)       
    }

    console.log("SEARCH LOCATION", searchLocation)

    const clearAllData = () => {
        localStorage.clear();
        window.location.reload();
    }

    const refreshWeather = () => {
        clearAllData();
        searchLocation.map((location) => {
            getWeather(location);
        })
    }

    setInterval(refreshWeather,1000*60*60);


    console.log("WEATHER DATA------> ", storedData)


    return (
        <WeatherContext.Provider value={{getWeather, storedData, clearAllData, modalIsOpen, toggleModal, setModalIsOpen }}>
            {children}
        </WeatherContext.Provider>
    )
}

export default WeatherProvider;