import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Gorakhpur",        
        feelsLike: 32.93,
        temp: 35.76,
        tempMin:35.76,
        tempMax:35.76,
        humidity: 7,
        pressure: 1012,
        seaLevel: 1012,
        speed: 3.16,
        weather: "clear sky",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
    <div style={{textAlign:"center"}  }>
        <h1>Weather App</h1>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info = {weatherInfo}/>
        </div>
    );

}