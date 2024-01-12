const baseURL = "https://api.weatherapi.com/v1/current.json?key=2884180708b349b2848140819232312";

export const getWeatherData = async (city) => {
    const response = await fetch(`${baseURL}&q=${city}:india&aqi=yes`, {
        method: 'get'
    });

    return response.json();
}

export const getWeatherDataForCurrentLocation = async (lat, lon) => {
    const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`, {
        method: 'get'
    });

    return response.json();
}