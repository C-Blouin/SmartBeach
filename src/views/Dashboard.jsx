import React, { useEffect } from "react";

import infoVector from "../images/dashboard/info-vector.svg";
import sunVector from "../images/dashboard/sun.svg";

import dangerIndicator from "../images/dashboard/danger.svg";
function Dashboard() {
  return (
    <main>
      <section>{/*Weather Menu*/}</section>

      <section>
        <article id="weather-widget">
          <p>
            <span id="temperature">24 º </span>
            <i id="weather-icon">Weather Icon</i>
          </p>
          <p>Sunny</p>
          <div>
            <p>
              <i>High Icon</i> H: <span id="high-temperature">32 º</span>
            </p>
            <p>
              <i>Low Icon</i> L: <span id="low-temperature">16 º</span>
            </p>
          </div>
        </article>

        {/*Sample markup for the data cards */}
        <article>
          <div>
            <p>WIND</p> <i>Safety Indicator</i>
          </div>
          <i>Wind Symbol</i>
          <p>
            <strong>
              Speed: <span>11.12</span> <span>km/h</span>
            </strong>
          </p>
        </article>
      </section>
      <section className="dashboard-safety-indicators">
        <div>
          <h2>Safety Indicators</h2>
          <span className="tooltip">
            <button className="tooltip-toggle" type="button">
              <img src={infoVector} width="20" height="20" alt="info-icon" />
            </button>
            <span className="tooltip-text">Information here</span>
          </span>
        </div>
        <section className="safety-indicators">
          <ul>
            <li>
              <div>
                <img src={sunVector} width="35" height="35" alt="sun-icon" />
                <p>UV</p>
              </div>
              <div>
                <img
                  src={dangerIndicator}
                  width="19"
                  height="19"
                  alt="danger-indicator"
                />
                <p>dangerous</p>
              </div>
            </li>
            <li>
              <div>
                <img src={sunVector} width="35" height="35" alt="sun-icon" />
                <p>Waves</p>
              </div>
              <div>
                <img
                  src={dangerIndicator}
                  width="19"
                  height="19"
                  alt="danger-indicator"
                />
                <p>dangerous</p>
              </div>
            </li>
            <li>
              <div>
                <img src={sunVector} width="35" height="35" alt="sun-icon" />
                <p>Rip Current</p>
              </div>
              <div>
                <img
                  src={dangerIndicator}
                  width="19"
                  height="19"
                  alt="danger-indicator"
                />
                <p>dangerous</p>
              </div>
            </li>
            <li>
              <div>
                <img src={sunVector} width="35" height="35" alt="sun-icon" />
                <p>Air Quality</p>
              </div>
              <div>
                <img
                  src={dangerIndicator}
                  width="19"
                  height="19"
                  alt="danger-indicator"
                />
                <p>dangerous</p>
              </div>
            </li>
          </ul>
        </section>
      </section>
    </main>
  );
}

export default Dashboard;
