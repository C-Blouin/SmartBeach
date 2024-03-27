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
import humidity from "../images/dashboard/panels/humidity-index.svg";
import windIndictor from "../images/dashboard/panels/wind-indicator.svg";
import rainChance from "../images/dashboard/panels/rain-chances.svg";
import waterTemperature from "../images/dashboard/panels/water-temp.svg";
import waveHeight from "../images/dashboard/panels/wave-height.svg";

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

  function updateWaveHeight(waveHeight) {
    let wavesIndicatorText = document.getElementById("waves-indicator-text");
    let wavesIndicatorImage = document.getElementById("waves-indicator-image");
    let waveIndicatorHeightLeft = document.getElementById(
      "waveIndicatorHeightLeft"
    );
    let waveIndicatorHeightLeftIcon = document.getElementById(
      "waveIndicatorHeightLeftIcon"
    );

    // If its higher than 1m its a Dangerous Wave
    if (waveHeight > 1) {
      wavesIndicatorText.textContent = "dangerous";
      wavesIndicatorImage.src = dangerIndicator;
      waveIndicatorHeightLeftIcon.src = dangerIndicator;
      console.log("dangerous");
    } // If its between 0.5 to 1m its a Moderate Wave
    else if (waveHeight < 1 && waveHeight > 0.5) {
      wavesIndicatorText.textContent = "moderate";
      wavesIndicatorImage.src = cautionIndicator;
      waveIndicatorHeightLeftIcon.src = cautionIndicator;
      console.log("Moderate");
    } // If its below 0.5 its a Safe Wave
    else {
      wavesIndicatorText.textContent = "safe";
      wavesIndicatorImage.src = safeIndicator;
      waveIndicatorHeightLeftIcon.src = safeIndicator;
      console.log("Safe");
    }

    waveIndicatorHeightLeft.textContent = waveHeight + " m";
  }

  function updateSeaTemp(seaTemperature) {
    let waterTemperatureText = document.getElementById("waterTemperature");

    waterTemperatureText.textContent = seaTemperature + "°";
  }

  function updateWindSpeed(windSpeed) {
    let windSpeedText = document.getElementById("windSpeedLeft");

    windSpeedText.textContent = windSpeed + " k/mh";
  }
  useEffect(() => {
    const fetchData = async () => {
      // API
      const apiUrl = "https://micbrucecounty22f.onrender.com/get-predict";

      try {
        let response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        let responseJson = await response.json();

        let waveHeight = Math.floor(
          responseJson[0]["sea_surface_wave_significant_height (m)"]
        );
        console.log("Wave Height (m):" + waveHeight);
        updateWaveHeight(waveHeight);

        let seaTemperature = Math.floor(
          responseJson[0]["sea_water_temperature_3 (K)"] - 273
        );
        console.log("sea Temperature:" + seaTemperature);
        updateSeaTemp(seaTemperature);

        let windSpeed = Math.floor(responseJson[0]["wind_speed (m s-1)"] * 3.6);
        console.log("wind speed:" + windSpeed);
        updateWindSpeed(windSpeed);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  //WEATHER API FROM HOME

  // Setting the initial state of the weather data to null, which will be populated later with the fetched data from the API.
  const [weatherData, setWeatherData] = useState(null);

  // useEffect Hook to fetch the weather data from the API, and update the state with the fetched data.
  useEffect(() => {
    const fetchWeatherData = async () => {
      // Try to fetch the data, if there is an error, log the error to the console.
      try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/forecast/daily?lat=44.18339&lon=-81.63307&cnt=7&appid=b50c1df1821232d52ebcfef4330bb7d6');
        if (!response.ok) {
          console.log(`Error fetching weather data: ${response.status} ${response.statusText}`)
        }
        // IF the response is successful, parse the response into JSON and set the weatherData state to the fetched data.
        const data = await response.json();
        console.log(data);
        setWeatherData(data);
      } 
      // Catch any errors and log them to the console.
      catch (error) {
        console.error('Error fetching weather data:', error);
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

  // Each day the API is fetching a new 7 day forecast, so these calculations will be based on the first day or the current day of the forecast.
  const temperature = weatherData && Math.round(convertKelvinToCelsius(weatherData.list[0].temp.day)) + "°";
  // Min & Max Temperature for the current day
  const minTemperature = weatherData && Math.round(convertKelvinToCelsius(weatherData.list[0].temp.min)) + "°";
  const maxTemperature = weatherData && Math.round(convertKelvinToCelsius(weatherData.list[0].temp.max)) + "°";
  // Weather Condition (Light Snow, Sunny, etc). Passing it through the capitalizeEachWord function to capitalize the first letter of each word for consistentcy.
  const condition = weatherData && capitalizeEachWord(weatherData.list[0].weather[0].description);
    
  // Weather Icons Object, Setting the weather icon codes from the API to the imported SVGs. These icons will be dynamically rendered based on the current weather condition.
  const weatherIcons = {
    '01d': sunnyIcon,                     // 01d, 01n - Clear Sky
    '01n': sunnyIconNight,              
    '02d': sunWithCloudsIcon,             // 02d, 02n - Sun with Clouds
    '02n': sunWithCloudsIconNight,       
    '03d': cloudIcon,                     // 03d, 03n - Clouds
    '03n': cloudIconNight,               
    '04d': partlyCloudyIcon,              // 04d, 04n - Broken Clouds
    '04n': partlyCloudyIconNight,               
    '09d': cloudWithRainIcon,             // 09d, 09n - Clouds with Showers
    '09n': cloudWithRainIconNight,        
    '10d': sunCloudsRainIcon,             // 10d, 10n - Sun, Cloud, and Rain
    '10n': sunCloudsRainIconNight,        
    '11d': cloudWithLightningIcon,        // 11d, 11n - Thunderstorms
    '11n': cloudWithLightningIconNight,  
    '13d': snowyIcon,                     // 13d, 13n - Snow
    '13n': snowyIconNight,                
  };
  
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-body">
        {/* Start of Weather Menu */}
        <div className="dashboard-menu">
          {/* Start of button container */}
          <div className="button-container">
            <button className="active">
              <img src={sunIcon} alt="Sun Icon" width="30" height="30" />
              <p>Today</p>
            </button>
            <button>
              <img
                src={sunWithClouds}
                alt="Sun with Clouds Icon"
                width="30"
                height="30"
              />
              <p>Sun</p>
            </button>
            <button>
              <img
                src={sunLightClouds}
                alt="Sun with Light Clouds Icon"
                width="30"
                height="30"
              />
              <p>Mon</p>
            </button>
            <button>
              <img src={sunIcon} alt="Sun Icon" width="30" height="30" />
              <p>Tue</p>
            </button>
            <button>
              <img src={sunIcon} alt="Sun Icon" width="30" height="30" />
              <p>Wed</p>
            </button>
            <button>
              <img src={sunIcon} alt="Sun Icon" width="30" height="30" />
              <p>Thu</p>
            </button>
            <button>
              <img
                src={cloudWithLightningAndRain}
                alt="Cloud with Lightning and Rain Icon"
                width="30"
                height="30"
              />
              <p>Fri</p>
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
                src={sunIcon}
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
              {/* Sample markup for the data cards */}
              <article className="dashboard-data-card">
                <div className="dashboard-data-card-top">
                  <p>Wind Speed</p>
                  <img
                    src={cautionIndicator}
                    width="15"
                    height="19"
                    alt="Moderate Indicator"
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
                    <small>k/hm</small>
                  </p>
                </div>
              </article>

              <article className="dashboard-data-card">
                <div className="dashboard-data-card-top">
                  <p>Humidity</p>
                  <img
                    src={safeIndicator}
                    width="15"
                    height="19"
                    alt="Safe Indicator"
                    className="safety-indicators"
                  />
                </div>
                <div className="dashboard-card-bottom">
                  <img
                    src={humidity}
                    alt="Humidity Icon"
                    width="50"
                    height="50"
                  />
                  <p className="dashboard-forecast-prediction-value">
                    8 <small>%</small>
                  </p>
                </div>
              </article>

              <article className="dashboard-data-card">
                <div className="dashboard-data-card-top">
                  <p>Wave Height</p>
                  <img
                    src={safeIndicator}
                    width="15"
                    height="19"
                    alt="Safe Indicator"
                    className="safety-indicators"
                    id="waveIndicatorHeightLeftIcon"
                  />
                </div>
                <div className="dashboard-card-bottom">
                  <img
                    src={waveHeight}
                    alt="Wave Height Icon"
                    width="50"
                    height="50"
                  />
                  <p
                    className="dashboard-forecast-prediction-value"
                    id="waveIndicatorHeightLeft"
                  >
                    <small>m</small>
                  </p>
                </div>
              </article>

              <article className="dashboard-data-card">
                <div className="dashboard-data-card-top">
                  <p>Water Temp</p>
                  <img
                    src={safeIndicator}
                    width="15"
                    height="19"
                    alt="Safe Indicator Icon"
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
                    <small>º</small>
                  </p>
                </div>
              </article>

              <article className="dashboard-data-card">
                <div className="dashboard-data-card-top">
                  <p>Rain Chances</p>
                  <img
                    src={dangerIndicator}
                    width="15"
                    height="19"
                    alt="Danger Indicator"
                    className="safety-indicators"
                  />
                </div>
                <div className="dashboard-card-bottom">
                  <img
                    src={rainChance}
                    alt="Rain Chance Icon"
                    width="50"
                    height="50"
                  />
                  <p className="dashboard-forecast-prediction-value">
                    85 <small>%</small>
                  </p>
                </div>
              </article>
            </section>

            <section className="dashboard-safety-indicators dashboard-safety-indicators-container">
              <div className="safety-indicators-top">
                <h2>Safety Indicators</h2>
                <button className="tooltip-toggle" type="button">
                  <img
                    src={infoVector}
                    width="20"
                    height="20"
                    alt="info-icon"
                  />
                </button>
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
                      <p>dangerous</p>
                      <img
                        src={dangerIndicator}
                        width="19"
                        height="19"
                        alt="danger-indicator"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="safety-indicators-left-content">
                      <img src={waves} width="50" height="50" alt="sun-icon" />
                      <p>Waves</p>
                    </div>
                    <div className="safety-indicators-right-content">
                      <p id="waves-indicator-text">good</p>
                      <img
                        id="waves-indicator-image"
                        src={safeIndicator}
                        width="19"
                        height="19"
                        alt="safe-indicator"
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
                  </li>
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
                      <p>moderate</p>
                      <img
                        src={cautionIndicator}
                        width="19"
                        height="19"
                        alt="moderate-indicator"
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
