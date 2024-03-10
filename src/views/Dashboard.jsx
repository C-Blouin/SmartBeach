import React, { useEffect } from "react";
import infoVector from "../images/dashboard/info-vector.svg";
import sunVector from "../images/dashboard/sun.svg";
import dangerIndicator from "../images/dashboard/danger.svg";
import  rainChance from "../images/landing/forecast-icons/umbrella.svg";

function Dashboard() {
  return (
    <div className="dashboard-wrapper">

      <div className="dashboard-body container">
        <section className="dashboard-menu">{/* Weather Menu */}</section>

        <div className="dashboard-widgets-grid-container">
          
          <section className="dashboard-weather-widget-container">
            <article id="weather-widget-wrapper">
              <div className="weather-info">
                <h1>
                  <span id="temperature">24 º </span>
                </h1>
                <img src={sunVector} id="weather-icon" alt="sun-icon" />
                <p>Sunny</p>
              </div>
              <p>
                <i>High Icon</i> H: <span id="high-temperature">32 º</span>
              </p>
              <p>
                <i>Low Icon</i> L: <span id="low-temperature">16 º</span>
              </p>
            </article>

            {/* Sample markup for the data cards */}
            <article className="dashboard-widget-card">
							<div className="dashboard-widget-top">
								<p>Wind Speed</p>
								<img src={dangerIndicator}  width="19"
                      height="19" alt="Danger Indicator" className="safety-indicators" />
							</div>
							<img src={rainChance} alt="Wind Speed Icon" />     
							<p>103 <small>km/h</small></p>
						</article>

            <article className="dashboard-widget-card">
							<div className="dashboard-widget-top">
								<p>Wind Speed</p>
								<img src={dangerIndicator}  width="19"
                      height="19" alt="Danger Indicator" className="safety-indicators" />
							</div>
							<img src={rainChance} alt="Wind Speed Icon" />     
							<p>103 <small>km/h</small></p>
						</article>
          </section>

          <section className="dashboard-safety-indicators dashboard-safety-indicators-container">
            <div className="safety-indicators-top">
              <h2>Safety Indicators</h2>
              <span className="tooltip">
                <button className="tooltip-toggle" type="button">
                  <img src={infoVector} width="20" height="20" alt="info-icon"/>
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
