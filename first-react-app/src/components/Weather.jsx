import React, { useState } from "react";


// Define the Temperature component
function Temperature({ temp, units }) {
    return (
        <span>
            {temp}{units}
        </span>
    );
}

// Define the CheckWeather component
function CheckWeather({ onWeatherChange }) {
    const handleButtonClick = () => {
        // Example of changing the weather and temper
        onWeatherChange("rainy", 18);
    };

    return (
        <button onClick={handleButtonClick}>
            Change Weather
        </button>
    );


}


function Weather() {
    // Two separate state values to store weather data
    const [weather, setWeather] = useState("sunny");
    const [tempCelcius, setTempCelcius] = useState(27);

    // Handler function to update both state values at once
    const handleWeatherChange = (newWeather, newTemp) => {
        setWeather(newWeather);
        setTempCelcius(newTemp);

    };

    return (
        <div className="Weather componentBox">
            <h2>Today's Weather</h2>

            <div>
                <strong>{weather}</strong> with a temp of <br></br>
                <Temperature temp={tempCelcius} units="C" />
            </div>


            <CheckWeather onWeatherChange={handleWeatherChange} />

        </div>
    );


}

export default Weather;