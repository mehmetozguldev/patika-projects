import { useState, useEffect, createContext, useContext } from "react";
import axios from 'axios';
import { useCity } from "./GetCoordinates";

const WeatherContext = createContext();

function WeatherProvider({ children }) {

    const { cityName } = useCity();

    const [weather, setWeather] = useState();

    const values = {
        weather,
        setWeather,
    }

    useEffect(() => {
        const getWeatherDataCity = async (cityName) => {

            try {
                const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=2528d5586a2a97c2aa35dca1b3023742`);
                setWeather(data);
            } catch (error) {
                alert("Error: ", error);
            }
        }
        cityName && getWeatherDataCity(cityName);       
    }, [cityName])

    return (
        <WeatherContext.Provider value={values}>
            {children}
        </WeatherContext.Provider>
    )
}
const useWeather = () => useContext(WeatherContext);

export { WeatherProvider, useWeather }