import { createContext, useState } from "react";
import axios from "axios";
export const WeatherContext = createContext();

const WeatherProvider = ({children}) => {
    const weatherData = [];
    const getWeather = async (location) => {
        console.log("Input in context",location)
        const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=dd5fec9dacb84141a3862335232507&q=${location}`);
        return response.data
    }

    console.log("WEATHER DATA ===> ", weatherData)

    const storedWeatherData = JSON.parse(localStorage.getItem('weatherData'))

    console.log("STORED WEATHER DATA",storedWeatherData)

    return (
        <WeatherContext.Provider value={{getWeather, storedWeatherData}}>
            {children}
        </WeatherContext.Provider>
    )
}

export default WeatherProvider;