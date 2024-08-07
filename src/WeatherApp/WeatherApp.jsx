import React, { useState } from 'react';
import ResultBox from "./ResultBox";
import SearchBox from "./SearchBox";

const WeatherApp = () => {
  const apiKey = '5f34bd6932f39815a077c0663a1d8d2d';
  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric';
  let [WeatherInfo, setWeatherInfo] = useState();

  return (
    <>
    <SearchBox updateInfo={setWeatherInfo} apiUrl={apiUrl} apiKey={apiKey} />
    {WeatherInfo && <ResultBox result={WeatherInfo} />}
    </>
  )
}

export default WeatherApp