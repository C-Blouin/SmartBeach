import React, { useEffect, useState } from "react";
import infoVector from "../images/dashboard/info-vector.svg";

// Menu Navigation Icon Imports
import sunIcon from "../images/dashboard/weather/sun.svg";
import sunWithClouds from "../images/dashboard/weather/sun-light-clouds.svg";
import sunLightClouds from "../images/dashboard/weather/sun-light-clouds.svg";
import cloud from "../images/dashboard/weather/cloud.svg";
import cyclone from "../images/dashboard/weather/cyclone.svg";
import tornado from "../images/dashboard/weather/tornado.svg";
import cloudWithRain from "../images/dashboard/weather/cloud-with-rain.svg";
import cloudWithLightningAndRain from "../images/dashboard/weather/cloud-with-lightning-and-rain.svg";
import cloudWithSnow from "../images/dashboard/weather/cloud-with-snow.svg";

// Primary Panel SVG Imports
import humidityImage from "../images/dashboard/panels/humidity-index.svg";
import windIndictor from "../images/dashboard/panels/wind-indicator.svg";
import rainChancesImage from "../images/dashboard/panels/rain-chances.svg";
import waterTemperature from "../images/dashboard/panels/water-temp.svg";
import waveHeightImage from "../images/dashboard/panels/wave-height.svg";

// Safety Indicators Icon Imports
import sunVector from "../images/dashboard/sun.svg";
import waves from "../images/dashboard/waves.svg";
import uv from "../images/dashboard/uv.svg";
import ripCurrent from "../images/dashboard/rip.svg";
import airQuality from "../images/dashboard/air.svg";

// Stop Light Indicator Icon Import
import safeIndicator from "../images/landing/safety-indicators/safe.svg";
import cautionIndicator from "../images/landing/safety-indicators/caution.svg";
import dangerIndicator from "../images/landing/safety-indicators/danger.svg";

// Weather Icon Imports for Icon Object to dynamically render the weather icons based on the weather condition.

// 01d, 01n - Clear Sky
import sunnyIcon from "../images/dashboard/weather/sun.svg";
import sunnyIconNight from "../images/dashboard/weather/sun.svg";
// 02d, 02n - Sun with Clouds
import sunWithCloudsIcon from "../images/dashboard/weather/sun-light-clouds.svg";
import sunWithCloudsIconNight from "../images/dashboard/weather/sun-light-clouds.svg";
// 03d, 03n - Clouds
import cloudIcon from "../images/dashboard/weather/cloud.svg";
import cloudIconNight from "../images/dashboard/weather/cloud.svg";
// 04d, 04n - Broken Clouds
import partlyCloudyIcon from "../images/dashboard/weather/cloud.svg";
import partlyCloudyIconNight from "../images/dashboard/weather/cloud.svg";
// 09d, 09n - Clouds with Showers
import cloudWithRainIcon from "../images/dashboard/weather/cloud-with-rain.svg";
import cloudWithRainIconNight from "../images/dashboard/weather/cloud-with-rain.svg";
// 10d, 10n - Sun, Cloud, and Rain
import sunCloudsRainIcon from "../images/dashboard/weather/sun-clouds-with-rain.svg";
import sunCloudsRainIconNight from "../images/dashboard/weather/sun-clouds-with-rain.svg";
// 11d, 11n - Thunderstorm
import cloudWithLightningIcon from "../images/dashboard/weather/cloud-with-lightning-and-rain.svg";
import cloudWithLightningIconNight from "../images/dashboard/weather/cloud-with-lightning-and-rain.svg";
// 13d, 13n - Snow
import snowyIcon from "../images/dashboard/weather/cloud-with-snow.svg";
import snowyIconNight from "../images/dashboard/weather/cloud-with-snow.svg";

function Dashboard() {
  document.title = "SmartBeach | Dashboard";

  const [buoyData, setBuoyData] = useState(null);

  useEffect(() => {
    const fetchBuoyData = async () => {
      // Buoy Data API Data URL.
      const apiUrl = "https://micbrucecounty22f.onrender.com/get-predict";

      try {
        let response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        let responseJson = await response.json();
        setBuoyData(responseJson);
        console.log(responseJson);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBuoyData();
  }, []);

  // Setting the initial state of the weather data to null, which will be populated later with the fetched data from the API.
  const [weatherData, setWeatherData] = useState(null);

  // useEffect Hook to fetch the weather data from the API, and update the state with the fetched data.
  useEffect(() => {
    const fetchWeatherData = async () => {
      // Try to fetch the data, if there is an error, log the error to the console.
      try {
        const response = await fetch(
          "https://api.openweathermap.org/data/2.5/forecast/daily?lat=44.18339&lon=-81.63307&cnt=7&appid=b50c1df1821232d52ebcfef4330bb7d6"
        );
        if (!response.ok) {
          console.log(
            `Error fetching weather data: ${response.status} ${response.statusText}`
          );
        }
        // IF the response is successful, parse the response into JSON and set the weatherData state to the fetched data.
        const data = await response.json();
        console.log(data);
        setWeatherData(data);
      } catch (error) {
        // Catch any errors and log them to the console.
        console.error("Error fetching weather data:", error);
      }
    };

    // Invoking the fetchWeatherData function to fetch the weather data from the API.
    fetchWeatherData();
  }, []);

  // Kelvin to Celsius
  const convertKelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(1);
  };

  // Capitalize the first letter of each word in a string
  const capitalizeEachWord = (word) => {
    return word.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  // Setting the initial state of the forecast day offset to 0
  const [forecastDayOffset, setForecastDayOffset] = useState(0);

  // Setting the forecast days of the week, starting from Today
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const currentDayIndex =
    weatherData && new Date(weatherData.list[0].dt * 1000).getDay();

  // Each day the API is fetching a new 7 day forecast, so these calculations will be based on the first day or the current day of the forecast.
  const temperature =
    weatherData &&
    Math.round(
      convertKelvinToCelsius(weatherData.list[forecastDayOffset].temp.day)
    ) + "°";
  // Min & Max Temperature for the current day
  const minTemperature =
    weatherData &&
    Math.round(
      convertKelvinToCelsius(weatherData.list[forecastDayOffset].temp.min)
    ) + "°";
  const maxTemperature =
    weatherData &&
    Math.round(
      convertKelvinToCelsius(weatherData.list[forecastDayOffset].temp.max)
    ) + "°";
  // Weather Condition (Light Snow, Sunny, etc). Passing it through the capitalizeEachWord function to capitalize the first letter of each word for consistentcy.
  const condition =
    weatherData &&
    capitalizeEachWord(
      weatherData.list[forecastDayOffset].weather[0].description
    );
  // Humidity
  const humidity = weatherData && weatherData.list[forecastDayOffset].humidity;
  // Probability of precipitation, converting it to a percentage.
  const rainChance =
    weatherData && (weatherData.list[forecastDayOffset].pop * 100).toFixed(0);

  const waveHeight =
    buoyData &&
    Math.floor(buoyData[0]["sea_surface_wave_significant_height (m)"]);
  const seaTemperature =
    buoyData &&
    Math.floor(buoyData[0]["sea_water_temperature_3 (K)"] - 273.15).toFixed(1);

  // Buoy Wind Gusts, wind gusts are in meters per seconds, converting it to km/h, we want to include this, but the conversion is not providing the correct value.
  const buoyWindGusts =
    buoyData && Math.floor(buoyData[0]["wind_speed_of_gust (m s-1)"] * 3.6);

  // Buoy wind speed, wind speed is in meters per seconds, converting it to km/h
  const buoyWindSpeed =
    buoyData && Math.floor(buoyData[0]["wind_speed (m s-1)"] * 3.6);
  // Buoy Air Pressure at Sea Level, converting it to kPa
  const seaAirPressure =
    buoyData && Math.round(buoyData[0]["air_pressure_at_mean_sea_level (Pa)"]);

  // Sea wave direction, the direction the waves are coming from.
  const waveDirection =
    buoyData && buoyData[0]["sea_surface_wave_from_direction (degree)"];

  // Weather Icons Object, Setting the weather icon codes from the API to the imported SVGs. These icons will be dynamically rendered based on the current weather condition.
  const weatherIcons = {
    "01d": sunnyIcon, // 01d, 01n - Clear Sky
    "01n": sunnyIconNight,
    "02d": sunWithCloudsIcon, // 02d, 02n - Sun with Clouds
    "02n": sunWithCloudsIconNight,
    "03d": cloudIcon, // 03d, 03n - Clouds
    "03n": cloudIconNight,
    "04d": partlyCloudyIcon, // 04d, 04n - Broken Clouds
    "04n": partlyCloudyIconNight,
    "09d": cloudWithRainIcon, // 09d, 09n - Clouds with Showers
    "09n": cloudWithRainIconNight,
    "10d": sunCloudsRainIcon, // 10d, 10n - Sun, Cloud, and Rain
    "10n": sunCloudsRainIconNight,
    "11d": cloudWithLightningIcon, // 11d, 11n - Thunderstorms
    "11n": cloudWithLightningIconNight,
    "13d": snowyIcon, // 13d, 13n - Snow
    "13n": snowyIconNight,
  };

  // Get the Weather Icon Code from the API, to pass it into the weatherIcons object to retrieve the corresponding weather icon for display.
  const iconCode = [];
  const weatherIcon = [];

  for (let i = 0; i < 7; i++) {
    iconCode[i] = weatherData && weatherData.list[i].weather[0].icon;
    weatherIcon[i] = weatherIcons[iconCode[i]];
  }

  /*

  Conditional Logic to display safety indicators based on the wind speed, wind gusts, humidity, and rain chance.

  */

  // Wind Speed Indicator, declaring the initial state of the wind speed indicator to update the state dynamically based on the wind speed value from the API.
  const [windSpeedIndicatorSrc, setWindSpeedIndicatorSrc] =
    useState(safeIndicator);
  const [windSpeedIndicatorAlt, setWindSpeedIndicatorAlt] =
    useState("Safe Indicator");

  // Wind Speed Conditional Logic Effect Hook
  useEffect(() => {
    // Wind Speed Indicator
    if (buoyWindSpeed > 20 && buoyWindSpeed < 40) {
      setWindSpeedIndicatorSrc(cautionIndicator);
      setWindSpeedIndicatorAlt("Caution Indicator");
    } else if (buoyWindSpeed >= 40) {
      setWindSpeedIndicatorSrc(dangerIndicator);
      setWindSpeedIndicatorAlt("Danger Indicator");
    } else {
      setWindSpeedIndicatorSrc(safeIndicator);
      setWindSpeedIndicatorAlt("Safe Indicator");
    }
    // Passing in windSpeed into the useEffect hook to consistently adjust the value change logic.
  }, [buoyWindSpeed]);

  // Wind Gusts State Initialization
  const [windGustsIndicatorSrc, setWindGustsIndicatorSrc] =
    useState(safeIndicator);
  const [windGustsIndicatorAlt, setWindGustsIndicatorAlt] =
    useState("Safe Indicator");

  // Wind Gusts Conditional Logic Effect Hook
  useEffect(() => {
    // Wind Speed Indicator
    if (buoyWindGusts > 20 && buoyWindGusts < 40) {
      setWindGustsIndicatorSrc(cautionIndicator);
      setWindGustsIndicatorAlt("Caution Indicator");
    } else if (buoyWindGusts >= 40) {
      setWindGustsIndicatorSrc(dangerIndicator);
      setWindGustsIndicatorAlt("Danger Indicator");
    } else {
      setWindGustsIndicatorSrc(safeIndicator);
      setWindGustsIndicatorAlt("Safe Indicator");
    }
  }, [buoyWindGusts]);

  // Humidity Indicator State Initialization
  const [humidityIndicatorSrc, setHumidityIndicatorSrc] =
    useState(safeIndicator);
  const [humidityIndicatorAlt, setHumidityIndicatorAlt] =
    useState("Safe Indicator");

  // Humidity Conditional Logic Effect Hook
  useEffect(() => {
    if (humidity > 60 && humidity < 80) {
      setHumidityIndicatorSrc(cautionIndicator);
      setHumidityIndicatorAlt("Caution Indicator");
    } else if (humidity >= 80) {
      setHumidityIndicatorSrc(dangerIndicator);
      setHumidityIndicatorAlt("Danger Indicator");
    } else {
      setHumidityIndicatorSrc(safeIndicator);
      setHumidityIndicatorAlt("Safe Indicator");
    }
  }),
    [humidity];

  // Rain Chance Indicator State Initialization
  const [rainChanceIndicatorSrc, setRainChanceIndicatorSrc] =
    useState(safeIndicator);
  const [rainChanceIndicatorAlt, setRainChanceIndicatorAlt] =
    useState("Safe Indicator");

  // Rain Chance Conditional Logic Effect Hook
  useEffect(() => {
    if (rainChance > 30 && rainChance < 60) {
      setRainChanceIndicatorSrc(cautionIndicator);
      setHumidityIndicatorAlt("Caution Indicator");
    } else if (rainChance >= 60) {
      setRainChanceIndicatorSrc(dangerIndicator);
      setRainChanceIndicatorAlt("Danger Indicator");
    } else {
      setRainChanceIndicatorSrc(safeIndicator);
      setRainChanceIndicatorAlt("Safe Indicator");
    }
  }),
    [rainChance];

  // Wave Height Indicator State Initialization
  const [waveHeightIndicatorSrc, setWaveHeightIndicatorSrc] =
    useState(safeIndicator);
  const [waveHeightIndicatorAlt, setWaveHeightIndicatorAlt] =
    useState("Safe Indicator");
  const [waveHeightIndicatorText, setWaveHeightIndicatorText] = useState("");

  // Wave Height Conditional Logic Effect Hook
  useEffect(() => {
    if (waveHeight > 1) {
      setWaveHeightIndicatorSrc(dangerIndicator);
      setWaveHeightIndicatorAlt("Danger Indicator");
      setWaveHeightIndicatorText("Dangerous");
    } else if (waveHeight <= 1 && waveHeight > 0.5) {
      setWaveHeightIndicatorSrc(cautionIndicator);
      setWaveHeightIndicatorAlt("Caution Indicator");
      setWaveHeightIndicatorText("Moderate");
    } else {
      setWaveHeightIndicatorSrc(safeIndicator);
      setWaveHeightIndicatorAlt("Safe Indicator");
      setWaveHeightIndicatorText("Safe");
    }
  }),
    [waveHeight];

  // Sea Temperature Indicator State Initialization
  const [seaTemperatureIndicatorSrc, setSeaTemperatureIndicatorSrc] =
    useState(safeIndicator);
  const [seaTemperatureIndicatorAlt, setSeaTemperatureIndicatorAlt] =
    useState("Safe Indicator");

  // Sea Temperature Conditional Logic Effect Hook
  useEffect(() => {
    if (seaTemperature > 27) {
      setSeaTemperatureIndicatorSrc(cautionIndicator);
      setSeaTemperatureIndicatorAlt("Caution Indicator");
    } else if (seaTemperature < 15) {
      setSeaTemperatureIndicatorSrc(dangerIndicator);
      setSeaTemperatureIndicatorAlt("Danger Indicator");
    } else {
      setSeaTemperatureIndicatorSrc(safeIndicator);
      setSeaTemperatureIndicatorAlt("Safe Indicator");
    }
  }),
    [seaTemperature];

  // Sea Air Pressure Indicator State Initialization
  const [seaAirPressureIndicatorSrc, setSeaAirPressureIndicatorSrc] =
    useState(safeIndicator);
  const [seaAirPressureIndicatorAlt, setSeaAirPressureIndicatorAlt] =
    useState("Safe Indicator");
  const [seaAirPressureIndicatorText, setSeaAirPressureIndicatorText] =
    useState("");

  // Sea Air Pressure Conditional Logic Effect Hook
  // MAY NEED TO REVISIT THE CALCULATIONS FOR THE SEA AIR PRESSURE
  useEffect(() => {
    if (seaAirPressure < 9.8) {
      setSeaAirPressureIndicatorSrc(cautionIndicator);
      setSeaAirPressureIndicatorAlt("Caution Indicator");
      setSeaAirPressureIndicatorText("Moderate");
    } else if (seaAirPressure > 10.5) {
      setSeaAirPressureIndicatorSrc(dangerIndicator);
      setSeaAirPressureIndicatorAlt("Danger Indicator");
      setSeaAirPressureIndicatorText("Dangerous");
    } else {
      setSeaAirPressureIndicatorSrc(safeIndicator);
      setSeaAirPressureIndicatorAlt("Safe Indicator");
      setSeaAirPressureIndicatorText("Safe");
    }
  }),
    [seaAirPressure];

  // State Hook to hold the value of the wave direction text.
  const [waveDirectionText, setWaveDirectionText] = useState("");

  // Use effect hook to update the wave direction text based on the wave direction value from the buoy data API call, we are converting the degrees into simple to understand directions, North, South, East, West, etc.
  useEffect(() => {
    // North
    if (waveDirection >= 337.5 || waveDirection < 22.5) {
      setWaveDirectionText("North");
    }
    // North-East
    else if (waveDirection >= 22.5 && waveDirection < 67.5) {
      setWaveDirectionText("North-East");
    }
    // East
    else if (waveDirection >= 67.5 && waveDirection < 112.5) {
      setWaveDirectionText("East");
    }
    // South-East
    else if (waveDirection >= 112.5 && waveDirection < 157.5) {
      setWaveDirectionText("South-East");
    }
    // South
    else if (waveDirection >= 157.5 && waveDirection < 202.5) {
      setWaveDirectionText("South");
    }
    // South-West
    else if (waveDirection >= 202.5 && waveDirection < 247.5) {
      setWaveDirectionText("South-West");
    }
    // West
    else if (waveDirection >= 247.5 && waveDirection < 292.5) {
      setWaveDirectionText("West");
    }
    // North-West
    else {
      setWaveDirectionText("North-West");
    }
  }, [waveDirection]);

  function handleWeatherForecast(dayOffset) {
    //update global Weather Icon according to day selected
    const weatherIconElement = document.getElementById("weather-icon");
    weatherIconElement.src = "" + weatherIcon[dayOffset];

    let buttonToDisable = document.getElementById(
      "button-" + forecastDayOffset
    );
    buttonToDisable.classList.remove("active");
    console.log(buttonToDisable);

    setForecastDayOffset(dayOffset);

    let buttonToEnable = document.getElementById("button-" + dayOffset);
    buttonToEnable.classList.add("active");
    console.log(buttonToEnable);
  }

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-body">
        {/* Start of Weather Menu */}
        <div className="dashboard-menu">
          {/* Start of button container */}
          <div className="button-container">
            <button
              id="button-0"
              className="active"
              onClick={() => handleWeatherForecast(0)}
            >
              <img src={weatherIcon[0]} alt="Sun Icon" width="30" height="30" />
              <p>Today</p>
            </button>
            <button id="button-1" onClick={() => handleWeatherForecast(1)}>
              <img
                src={weatherIcon[1]}
                alt="Sun with Clouds Icon"
                width="30"
                height="30"
              />
              <p>{daysOfWeek[(currentDayIndex + 1) % 7]}</p>
            </button>
            <button id="button-2" onClick={() => handleWeatherForecast(2)}>
              <img
                src={weatherIcon[2]}
                alt="Sun with Light Clouds Icon"
                width="30"
                height="30"
              />
              {/* days of week are cycled therefore we need to use module 7 to start from Sunday in array */}
              <p>{daysOfWeek[(currentDayIndex + 2) % 7]}</p>
            </button>
            <button id="button-3" onClick={() => handleWeatherForecast(3)}>
              <img src={weatherIcon[3]} alt="Sun Icon" width="30" height="30" />
              <p>{daysOfWeek[(currentDayIndex + 3) % 7]}</p>
            </button>
            <button id="button-4" onClick={() => handleWeatherForecast(4)}>
              <img src={weatherIcon[4]} alt="Sun Icon" width="30" height="30" />
              <p>{daysOfWeek[(currentDayIndex + 4) % 7]}</p>
            </button>
            <button id="button-5" onClick={() => handleWeatherForecast(5)}>
              <img src={weatherIcon[5]} alt="Sun Icon" width="30" height="30" />
              <p>{daysOfWeek[(currentDayIndex + 5) % 7]}</p>
            </button>
            <button id="button-6" onClick={() => handleWeatherForecast(6)}>
              <img
                src={weatherIcon[6]}
                alt="Cloud with Lightning and Rain Icon"
                width="30"
                height="30"
              />
              <p>{daysOfWeek[(currentDayIndex + 6) % 7]}</p>
            </button>
          </div>
          {/* End of button container */}
        </div>
        {/* End of Weather Menu */}

        <div className="dashboard-primary-container">
          <div className="main-forecast-container">
            <div className="dashboard-temperature-card-top">
              <h1>
                <span id="dashboard-temperature-label">{temperature}</span>
              </h1>
              <img
                src={weatherIcon[0]}
                width="67"
                height="67"
                id="weather-icon"
                alt="sun-icon"
              />
            </div>
            <div className="dashboard-temperature-container">
              <p id="dashboard-weather-condition-label">{condition}</p>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#3499D7"
                  className="bi bi-arrow-up"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
                  />
                </svg>
                <p>
                  H: <span>{maxTemperature}</span>
                </p>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#3499D7"
                  className="bi bi-arrow-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"
                  />
                </svg>
                <p>
                  L: <span>{minTemperature}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="dashboard-widgets-grid-container">
            <section className="dashboard-data-card-container">
              {/* Wind Speed Card */}
              <article className="dashboard-data-card">
                <div className="dashboard-data-card-top">
                  <p>Wind Speed</p>
                  <img
                    src={windSpeedIndicatorSrc}
                    width="15"
                    height="19"
                    alt={windSpeedIndicatorAlt}
                    className="safety-indicators"
                  />
                </div>
                <div className="dashboard-card-bottom">
                  <img
                    src={windIndictor}
                    alt="Wind Speed Icon"
                    width="50"
                    height="50"
                  />
                  <p
                    className="dashboard-forecast-prediction-value"
                    id="windSpeedLeft"
                  >
                    {buoyWindSpeed} <small>k/hm</small>
                  </p>
                </div>
              </article>

              {/* Wind Gusts Card */}
              {/* <article className="dashboard-data-card">
                <div className="dashboard-data-card-top">
                  <p>Wind Gusts</p>
                  <img
                    src={windGustsIndicatorSrc}
                    width="15"
                    height="19"
                    alt={windGustsIndicatorAlt}
                    className="safety-indicators"
                  />
                </div>
                <div className="dashboard-card-bottom">
                  <img
                    src={windIndictor}
                    alt="Wind Gust Icon"
                    width="50"
                    height="50"
                  />
                  <p
                    className="dashboard-forecast-prediction-value"
                    id="windSpeedLeft"
                  >
                   {buoyWindGusts} <small>k/hm</small>
                  </p>
                </div>
              </article> */}

              {/* Humidity Card */}
              <article className="dashboard-data-card">
                <div className="dashboard-data-card-top">
                  <p>Humidity</p>
                  <img
                    src={humidityIndicatorSrc}
                    width="15"
                    height="19"
                    alt={humidityIndicatorAlt}
                    className="safety-indicators"
                  />
                </div>
                <div className="dashboard-card-bottom">
                  <img
                    src={humidityImage}
                    alt="Humidity Icon"
                    width="50"
                    height="50"
                  />
                  <p
                    className="dashboard-forecast-prediction-value"
                    id="humidityPercentage"
                  >
                    {humidity} <small>%</small>
                  </p>
                </div>
              </article>

              {/* Rain Chances Card */}
              <article className="dashboard-data-card">
                <div className="dashboard-data-card-top">
                  <p>Rain Chances</p>
                  <img
                    src={rainChanceIndicatorSrc}
                    width="15"
                    height="19"
                    alt={rainChanceIndicatorAlt}
                    className="safety-indicators"
                  />
                </div>
                <div className="dashboard-card-bottom">
                  <img
                    src={rainChancesImage}
                    alt="Rain Chance Icon"
                    width="50"
                    height="50"
                  />
                  <p className="dashboard-forecast-prediction-value">
                    {rainChance} <small>%</small>
                  </p>
                </div>
              </article>

              {/* Wave Height Card */}
              <article className="dashboard-data-card">
                <div className="dashboard-data-card-top">
                  <p>Wave Height</p>
                  <img
                    src={waveHeightIndicatorSrc}
                    width="15"
                    height="19"
                    alt={waveHeightIndicatorAlt}
                    className="safety-indicators"
                    id="waveIndicatorHeightLeftIcon"
                  />
                </div>
                <div className="dashboard-card-bottom">
                  <img
                    src={waveHeightImage}
                    alt="Wave Height Icon"
                    width="50"
                    height="50"
                  />
                  <p
                    className="dashboard-forecast-prediction-value"
                    id="waveIndicatorHeightLeft"
                  >
                    {waveHeight} <small>m</small>
                  </p>
                </div>
              </article>

              {/* Water Temperature Card */}
              <article className="dashboard-data-card">
                <div className="dashboard-data-card-top">
                  <p>Water Temp</p>
                  <img
                    src={seaTemperatureIndicatorSrc}
                    width="15"
                    height="19"
                    alt={seaTemperatureIndicatorAlt}
                    className="safety-indicators"
                  />
                </div>
                <div className="dashboard-card-bottom">
                  <img
                    src={waterTemperature}
                    alt="Water Temp Icon"
                    width="50"
                    height="50"
                  />
                  <p
                    className="dashboard-forecast-prediction-value"
                    id="waterTemperature"
                  >
                    {seaTemperature} <small>º</small>
                  </p>
                </div>
              </article>

              {/* Sea Air Pressure */}
              <article className="dashboard-data-card">
                <div className="dashboard-data-card-top">
                  <p>Sea Wave Directions</p>
                </div>
                <div className="dashboard-card-bottom">
                  <img
                    src={waveHeightImage}
                    alt="Sea Pressure Icon"
                    width="50"
                    height="50"
                  />
                  <p className="dashboard-forecast-prediction-value">
                    {waveDirectionText}
                  </p>
                </div>
              </article>
            </section>

            <section className="dashboard-safety-indicators dashboard-safety-indicators-container">
              <div className="safety-indicators-top">
                <h2>Safety Indicators</h2>
              </div>
              <section className="safety-indicators">
                <ul>
                  <li>
                    <div className="safety-indicators-left-content">
                      <img
                        src={sunVector}
                        width="50"
                        height="50"
                        alt="sun-icon"
                      />
                      <p>UV</p>
                    </div>
                    <div className="safety-indicators-right-content">
                      <p>Safe</p>
                      <img
                        src={safeIndicator}
                        width="19"
                        height="19"
                        alt="safe-indicator"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="safety-indicators-left-content">
                      <img src={waves} width="50" height="50" alt="sun-icon" />
                      <p>Waves</p>
                    </div>
                    <div className="safety-indicators-right-content">
                      <p id="waves-indicator-text">{waveHeightIndicatorText}</p>
                      <img
                        id="waves-indicator-image"
                        src={waveHeightIndicatorSrc}
                        width="19"
                        height="19"
                        alt={waveHeightIndicatorAlt}
                      />
                    </div>
                  </li>

                  <li>
                    <div className="safety-indicators-left-content">
                      <img
                        src={ripCurrent}
                        width="50"
                        height="50"
                        alt="sun-icon"
                      />
                      <p>Sea Air Pressure</p>
                    </div>
                    <div className="safety-indicators-right-content">
                      <p>{seaAirPressureIndicatorText}</p>
                      <img
                        src={seaAirPressureIndicatorSrc}
                        width="19"
                        height="19"
                        alt={seaAirPressureIndicatorAlt}
                      />
                    </div>
                  </li>

                  {/* <li>
                    <div className="safety-indicators-left-content">
                      <img
                        src={ripCurrent}
                        width="50"
                        height="50"
                        alt="sun-icon"
                      />
                      <p>Rip Current</p>
                    </div>
                    <div className="safety-indicators-right-content">
                      <p>moderate</p>
                      <img
                        src={cautionIndicator}
                        width="19"
                        height="19"
                        alt="moderate-indicator"
                      />
                    </div>
                  </li> */}

                  {/* Create an indicator or notice for the Sea Wave Direction? */}
                  {/* <li>
                    <div className="safety-indicators-left-content">
                      <img
                        src={airQuality}
                        width="50"
                        height="50"
                        alt="sun-icon"
                      />
                      <p>Air Quality</p>
                    </div>
                    <div className="safety-indicators-right-content">
                      <p>moderate</p>
                      <img
                        src={cautionIndicator}
                        width="19"
                        height="19"
                        alt="moderate-indicator"
                      />
                    </div>
                  </li> */}

                  <li>
                    <div className="safety-indicators-left-content">
                      <img
                        src={airQuality}
                        width="50"
                        height="50"
                        alt="sun-icon"
                      />
                      <p>Air Quality</p>
                    </div>
                    <div className="safety-indicators-right-content">
                      <p>Safe</p>
                      <img
                        src={safeIndicator}
                        width="19"
                        height="19"
                        alt="safe-indicator"
                      />
                    </div>
                  </li>
                </ul>
              </section>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
