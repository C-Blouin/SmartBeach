import React, { useEffect } from "react";
import infoVector from "../images/dashboard/info-vector.svg";
import sunVector from "../images/dashboard/sun.svg";
import dangerIndicator from "../images/dashboard/danger.svg";
import rainChance from "../images/landing/forecast-icons/umbrella.svg";

function Dashboard() {
  return (
    <div className="dashboard-wrapper">

      <div className="dashboard-body container">
        <section className="dashboard-menu">{/* Weather Menu */}</section>

        <div className="dashboard-widgets-grid-container">

          <section className="dashboard-forecast-container">

            <article className="dashboard-primary-widget-wrapper">
              <div className="dashboard-temperature-widget-top">
                <h1>
                  <span id="dashboard-temperature-label">24 º </span>
                </h1>
                <img src={sunVector} width="67" height="67" id="weather-icon" alt="sun-icon" />
              </div>
              <p id="dashboard-weather-condition-label">Sunny</p>
              <div className="temperature-container">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16"><path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5" />
                  </svg>
                  <p>H: <span>32°</span></p>
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16"><path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1" />
                  </svg>
                  <p>L: <span>16°</span></p>
                </div>
              </div>
            </article>

            <section className="dashboard-data-card-container">
              {/* Sample markup for the data cards */}
              <article className="dashboard-data-card">
                <div className="dashboard-data-card-top">
                  <p>Wind Speed</p>
                  <img src={dangerIndicator} width="15"
                    height="19" alt="Danger Indicator" className="safety-indicators" />
                </div>
                <img src={rainChance} alt="Wind Speed Icon" width="50" height="50" />
                <p className="dashboard-forecast-prediction-value">103 <small>km/h</small></p>
              </article>

              <article className="dashboard-data-card">
                <div className="dashboard-data-card-top">
                  <p>Wind Speed</p>
                  <img src={dangerIndicator} width="15"
                    height="19" alt="Danger Indicator" className="safety-indicators" />
                </div>
                <img src={rainChance} alt="Wind Speed Icon" width="50" height="50" />
                <p className="dashboard-forecast-prediction-value">103 <small>km/h</small></p>
              </article>

            <article className="dashboard-data-card">
                <div className="dashboard-data-card-top">
                  <p>Wind Speed</p>
                  <img src={dangerIndicator} width="15"
                    height="19" alt="Danger Indicator" className="safety-indicators" />
                </div>
                <img src={rainChance} alt="Wind Speed Icon" width="50" height="50" />
                <p className="dashboard-forecast-prediction-value">103 <small>km/h</small></p>
              </article>

              <article className="dashboard-data-card">
                <div className="dashboard-data-card-top">
                  <p>Wind Speed</p>
                  <img src={dangerIndicator} width="15"
                    height="19" alt="Danger Indicator" className="safety-indicators" />
                </div>
                <img src={rainChance} alt="Wind Speed Icon" width="50" height="50" />
                <p className="dashboard-forecast-prediction-value">103 <small>km/h</small></p>
              </article>

            <article className="dashboard-data-card">
                <div className="dashboard-data-card-top">
                  <p>Wind Speed</p>
                  <img src={dangerIndicator} width="15"
                    height="19" alt="Danger Indicator" className="safety-indicators" />
                </div>
                <img src={rainChance} alt="Wind Speed Icon" width="50" height="50" />
                <p className="dashboard-forecast-prediction-value">103 <small>km/h</small></p>
              </article>
              
            </section>

          </section>

          <section className="dashboard-safety-indicators dashboard-safety-indicators-container">
            <div className="safety-indicators-top">
              <h2>Safety Indicators</h2>
              <span className="tooltip">
                <button className="tooltip-toggle" type="button">
                  <img src={infoVector} width="20" height="20" alt="info-icon" />
                </button>
                {/* <span className="tooltip-text">Information here</span> */}
              </span>
            </div>
            <section className="safety-indicators">
              <ul>
                <li>
                  <div className="safety-indicators-left-content">
                    <img src={sunVector} width="35" height="35" alt="sun-icon" />
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
                    <img src={sunVector} width="35" height="35" alt="sun-icon" />
                    <p>Waves</p>
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
                    <img src={sunVector} width="35" height="35" alt="sun-icon" />
                    <p>Rip Current</p>
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
                    <img src={sunVector} width="35" height="35" alt="sun-icon" />
                    <p>Air Quality</p>
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
              </ul>
            </section>
          </section>
        </div>
      </div>

    </div>

  );
}

export default Dashboard;
