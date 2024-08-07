import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "./SearchBox.css";

const SearchBox = ({ apiKey, apiUrl, updateInfo }) => {
  let [city, setCity] = useState("");
  let [error , setError] = useState(false);

  const WeatherInfo = async () => {
    try {
        let result = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);
        let jsonResult = await result.json();
        const info = {
            city: jsonResult.name,
            feels_like: jsonResult.main.feels_like,
            temp: jsonResult.main.temp,
            wind_speed: jsonResult.wind.speed,
            humidity: jsonResult.main.humidity,
            weather: jsonResult.weather[0].main,
        }
        return info;
    } catch (error) {
        throw error;  // This will be caught by the calling function
    }
  };

  const handleSubmit = async (e) => {
    try {
        e.preventDefault();
        setCity("");
        setError(false);
        const info = await WeatherInfo();
        updateInfo(info);
    } catch (error) {
        setError(true);
    }
  };

  return (
    <div className="SearchBox">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setCity(e.target.value)}
          value={city}
          id="outlined-basic"
          label="City Name"
          variant="outlined"
        />
        <br /> <br />
        <Button type="submit" size="large" variant="contained">
          Search
        </Button>
      </form>
        {error && <p>City not found</p>}
    </div>
  );
};

export default SearchBox;
