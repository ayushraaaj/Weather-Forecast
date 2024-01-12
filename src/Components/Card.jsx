import React from "react";
import { useWeather } from "../Context/Weather";

const Card = () => {
    const Weather = useWeather();

    return (
        <div>
            <img src={Weather.data?.current.condition.icon} alt="" />
            <br />
            <h4 className="inline">{Weather.data?.current.temp_c}&deg; C </h4>
            <p className="inline">({Weather.data?.current.condition.text}) </p>
            <h5>{Weather.data?.location.name}, {Weather.data?.location.region}, {Weather.data?.location.country}</h5>
        </div>
    );
}

export default Card;