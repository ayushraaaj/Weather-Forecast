import React from "react";
import { useWeather } from "../Context/Weather";

const Input = () => {
    const Weather = useWeather();

    return (
        <input type="text" placeholder="Search here" value={Weather.city} onChange={(e) => Weather.setCity(e.target.value)} />
    );
}

export default Input;