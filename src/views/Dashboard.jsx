import React, { useEffect } from "react";
import infoVector from "../images/dashboard/info-vector.svg";

// Menu Navigation Icon Imports
import sunIcon from "../images/dashboard/weather/sun.svg";
import sunWithClouds from "../images/dashboard/weather/sun-with-clouds.svg";
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

function Dashboard() {
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

        let waveHeight =
          responseJson[0]["sea_surface_wave_significant_height (m)"];
        console.log("Wave Height (m):" + waveHeight);

        let wavesIndicatorText = document.getElementById(
          "waves-indicator-text"
        );
        let wavesIndicatorImage = document.getElementById(
          "waves-indicator-image"
        );

        // If its higher than 1m its a Dangerous Wave If its between 0.5 to 1m its a Moderate Wave If its below 0.5 its a Safe Wave
        if (waveHeight > 1) {
          wavesIndicatorText.textContent = "Dangerous";
          wavesIndicatorImage.src = dangerIndicator;
          console.log("Dangerous");
        } else if (waveHeight < 1 && waveHeight > 0.5) {
          wavesIndicatorText.textContent = "Moderate";
          wavesIndicatorImage.src = cautionIndicator;
          console.log("Moderate");
        } else {
          wavesIndicatorText.textContent = "Safe";
          wavesIndicatorImage.src = safeIndicator;
          console.log("Safe");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

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
                <span id="dashboard-temperature-label">24 º</span>
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
              <p id="dashboard-weather-condition-label">Sunny</p>
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
                  H: <span>32°</span>
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
                  L: <span>16°</span>
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
                  <p className="dashboard-forecast-prediction-value">
                    56 <small>km/h</small>
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
                  />
                </div>
                <div className="dashboard-card-bottom">
                  <img
                    src={waveHeight}
                    alt="Wave Height Icon"
                    width="50"
                    height="50"
                  />
                  <p className="dashboard-forecast-prediction-value">
                    0.5 <small>m</small>
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
                  <p className="dashboard-forecast-prediction-value">
                    20 <small>º</small>
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
