import { createContext, useContext, useState } from "react";
import { getWeatherData, getWeatherDataForCurrentLocation } from "../API";

const WeatherContext = createContext(null);

export const useWeather = () => useContext(WeatherContext);

export const WeatherProvider = (props) => {
    const [data, setData] = useState(null);
    const [city, setCity] = useState(null);

    const fetchWeatherData = async () => {
        await getWeatherData(city).then((d) => setData(d));
    }

    const fetchWeatherForCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            getWeatherDataForCurrentLocation(position.coords.latitude, position.coords.longitude).then((d) => setData(d));
        });
    }

    return (
        <WeatherContext.Provider value={{data, city, setCity, fetchWeatherData, fetchWeatherForCurrentLocation}}>
            {props.children}
        </WeatherContext.Provider>
    );
}