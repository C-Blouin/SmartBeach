// Global React Imports.
import React from "react";
import { useState, useEffect, useContext } from "react";

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

// Static Panel Icon Imports
import windSpeedImage from "../images/landing/forecast-icons/wind.svg";
import rainChanceImage from "../images/landing/forecast-icons/umbrella.svg";
import humidityImage from "../images/dashboard/panels/humidity-index.svg";

// Safety Indicator Imports
import safeIndicator from "../images/landing/safety-indicators/safe.svg";
import cautionIndicator from "../images/landing/safety-indicators/caution.svg";
import dangerIndicator from "../images/landing/safety-indicators/danger.svg";

// Why Section Icon Imports
import reasonIcon from "../images/landing/reason-icons/reason-icon.svg";
// About Image Imports
import aboutImage from "../images/landing/about/about-image.svg";
// Review Images Imports
import reviewImage from "../images/landing/reviews/laura.png";
// FAQS Image Imports
import lifeBuoy from "../images/landing/faq/life-buoy.png";

function Home() {

  document.title = "SmartBeach | Home";

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

  /* 
  
  Convertion & Data Formatting Functions 
  
  */

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
  // Wind Speed & Gusts, these values are in meters per second, but we want to display it in kilometers per hour, using the formula: (m/s * 3.6) = km/h, and fixing the value to to 2 decimal places.
  const windSpeed = weatherData && Math.round((weatherData.list[0].speed * 3.6).toFixed(2));
  // Wind Gusts, converting meters per second to kilometers per hour
  const windGusts = weatherData && Math.round((weatherData.list[0].gust * 3.6).toFixed(2));
  // Humidity
  const humidity = weatherData && weatherData.list[0].humidity;
  // Probability of precipitation, converting it to a percentage.
  const rainChance = weatherData && (weatherData.list[0].pop * 100).toFixed(0);

  /*

  Conditional Logic to display safety indicators based on the wind speed, wind gusts, humidity, and rain chance.

  */

  // Wind Speed Indicator, declaring the initial state of the wind speed indicator to update the state dynamically based on the wind speed value from the API.
  const [windSpeedIndicatorSrc, setWindSpeedIndicatorSrc] = useState(safeIndicator);
  const [windSpeedIndicatorAlt, setWindSpeedIndicatorAlt] = useState("Safe Indicator");

  // Wind Speed Conditional Logic Effect Hook
  useEffect(() => {
    // Wind Speed Indicator
    if (windSpeed > 20 && windSpeed < 40) {
      setWindSpeedIndicatorSrc(cautionIndicator);
      setWindSpeedIndicatorAlt("Caution Indicator");
    } else if (windSpeed >= 40) { 
      setWindSpeedIndicatorSrc(dangerIndicator);
      setWindSpeedIndicatorAlt("Danger Indicator");
    } else {
      setWindSpeedIndicatorSrc(safeIndicator);
      setWindSpeedIndicatorAlt("Safe Indicator");
    }
    // Passing in windSpeed into the useEffect hook to consistently adjust the value change logic.
  }, [windSpeed]);

  // Wind Gusts State Initialization
  const [windGustsIndicatorSrc, setWindGustsIndicatorSrc] = useState(safeIndicator);
  const [windGustsIndicatorAlt, setWindGustsIndicatorAlt] = useState("Safe Indicator");

  // Wind Gusts Conditional Logic Effect Hook
  useEffect(() => {
    // Wind Speed Indicator
    if (windGusts > 20 && windGusts < 40) {
      setWindGustsIndicatorSrc(cautionIndicator);
      setWindGustsIndicatorAlt("Caution Indicator");
    } else if (windGusts >= 40) { 
      setWindGustsIndicatorSrc(dangerIndicator);
      setWindGustsIndicatorAlt("Danger Indicator");
    } else {
      setWindGustsIndicatorSrc(safeIndicator);
      setWindGustsIndicatorAlt("Safe Indicator");
    }
  }, [windGusts]);

  // Humidity Indicator State Initialization
  const [humidityIndicatorSrc, setHumidityIndicatorSrc] = useState(safeIndicator);
  const [humidityIndicatorAlt, setHumidityIndicatorAlt] = useState("Safe Indicator");

  // Humidity Conditional Logic Effect Hook
  useEffect(() => {
    if (humidity > 60 && humidity < 80) {
      setHumidityIndicatorSrc(cautionIndicator);
      setHumidityIndicatorAlt("Caution Indicator");
    }
    else if (humidity >= 80){
      setHumidityIndicatorSrc(dangerIndicator);
      setHumidityIndicatorAlt("Danger Indicator");
    }
    else {
      setHumidityIndicatorSrc(safeIndicator);
      setHumidityIndicatorAlt("Safe Indicator");
    }
  }), [humidity];

  // Rain Chance Indicator State Initialization
  const [rainChanceIndicatorSrc, setRainChanceIndicatorSrc] = useState(safeIndicator);
  const [rainChanceIndicatorAlt, setRainChanceIndicatorAlt] = useState("Safe Indicator");

  // Rain Chance Conditional Logic Effect Hook
  useEffect(() => {
    if (rainChance > 30 && rainChance < 60) {
      setRainChanceIndicatorSrc(cautionIndicator);
      setHumidityIndicatorAlt("Caution Indicator");
    }
    else if (rainChance >= 60){
      setRainChanceIndicatorSrc(dangerIndicator);
      setRainChanceIndicatorAlt("Danger Indicator");
    }
    else {
      setRainChanceIndicatorSrc(safeIndicator);
      setRainChanceIndicatorAlt("Safe Indicator");
    }
  }), [rainChance];

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

  // Get the Weather Icon Code from the API, to pass it into the weatherIcons object to retrieve the corresponding weather icon for display.
   const iconCode = weatherData && weatherData.list[0].weather[0].icon;
   const weatherIcon = weatherIcons[iconCode];

  // Hard coded icon value for demonstration purposes. Testing link: https://openweathermap.org/img/w/09d.png
  // const iconCode = '13d';
  // const weatherIcon = weatherIcons[iconCode];

  return (
    <div className="container-fluid p-0">
      {/* Start of Hero Wrapper */}
      <div className="hero-wrapper">
        {/* Start of Hero Section */}
        <div id="hero">
          {/* Start of Hero Content */}
          <section className="hero-content">
            <h1>
              Station Beach <br /> Kincardine
            </h1>
            <p>Transitioning current data into safe swimming.</p>
          </section>
          {/* End of Hero Content */}

          {/* Start of Hero Forecast */}
          <div className="hero-forecast">

            {/* Primary Card */}
            <div className="primary-card">
              <img src={weatherIcon} alt="Thunderstorm" />
              <div className="primary-card-content">
                <article>
                  {/* Passing the temperature value into the convertKelvin to Celsius function to render the temperature in a more friendly manner, fixed to 1 decimal place. */}
                  <h3>{temperature}</h3>
                  <p>{condition}</p>
                </article>
                <div className="temperature-container">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-arrow-up"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
                      />
                    </svg>
                    {/* Max Temperature */}
                    <p>{maxTemperature}</p>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-arrow-down"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"
                      />
                    </svg>
                    <p>{minTemperature}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sub Card One */}
            <article className="widget-card">
              <div className="widget-top">
                <p>Wind Speed</p>
                <img
                  src={windSpeedIndicatorSrc}
                  alt={windSpeedIndicatorAlt}
                  className="safety-indicators"
                />
              </div>
              <img src={windSpeedImage} alt="Wind Speed Icon" />
              <p>
                {windSpeed} <small>km/h</small>
              </p>
            </article>

            {/* Sub Card Two */}
            <article className="widget-card">
              <div className="widget-top">
                <p>Wind Gust</p>
                <img
                  src={windGustsIndicatorSrc}
                  alt={windGustsIndicatorAlt}
                  className="safety-indicators"
                />
              </div>
              <img src={windSpeedImage} alt="Wind Gust Icon" />
              <p>
                {windGusts} <small>km/h</small>
              </p>
            </article>

            {/* Sub Card Three */}
            <article className="widget-card">
              <div className="widget-top">
                <p>Humidity</p>
                <img
                  src={humidityIndicatorSrc}
                  alt={humidityIndicatorAlt}
                  className="safety-indicators"
                />
              </div>
              <img src={humidityImage} alt="Rain Chance Icon" />
              <p>{humidity}%</p>
            </article>

            {/* Sub Card Four */}
            <article className="widget-card">
              <div className="widget-top">
                <p>Rain Chance</p>
                <img
                  src={rainChanceIndicatorSrc}
                  alt={rainChanceIndicatorAlt}
                  className="safety-indicators"
                />
              </div>
              <img src={rainChanceImage} alt="Rain Chance Icon" />
              <p>{rainChance}%</p>
            </article>

            {/* Forecast Call to Action */}
            <a href="/dashboard" id="forecast-cta">
              Get Full Forecast
            </a>
          </div>
          {/* End of Hero Forecast */}
        </div>
        {/* End of Hero Section */}
      </div>
      {/* End of Hero Wrapper */}

      {/* Start of Why Section */}
      <section id="why">
        {/* Start of Why Section Primary Content */}
        <article className="why-container">
          <h2>Why Station Beach</h2>
          <div className="why-contents">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus
              error sit voluptatem accusantium doloremque laudantium.
            </p>
            <a href="/about">Read More</a>
          </div>
        </article>
        {/* End of Why Section Primary Content */}

        {/* Start of Reasons Container */}
        <div className="reasons">
          {/* Reason One Card */}
          <article>
            <img src={reasonIcon} alt="Reason" />
            <div>
              <h3 className="reason-heading">Heading</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cupiditate, saepe.
              </p>
            </div>
          </article>

          {/* Reson Two Card */}
          <article>
            <img src={reasonIcon} alt="Reason" />
            <div>
              <h3 className="reason-heading">Heading</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cupiditate, saepe.
              </p>
            </div>
          </article>

          {/* Reason Three Card */}
          <article>
            <img src={reasonIcon} alt="Reason" />
            <div>
              <h3 className="reason-heading">Heading</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cupiditate, saepe.
              </p>
            </div>
          </article>

          {/* Reason Four Card */}
          <article>
            <img src={reasonIcon} alt="Reason" />
            <div>
              <h3 className="reason-heading">Heading</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cupiditate, saepe.
              </p>
            </div>
          </article>
        </div>
        {/* End of Reasons Container */}
      </section>
      {/* End of Why Section */}

      {/* Start of About Section */}
      <div className="about-wrapper">
        <div id="about">
          <img src={aboutImage} alt="About the Project Graphic" />
          <article>
            <h2>About the Project</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus
              error sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <a href="/about">Read More</a>
          </article>
        </div>
      </div>
      {/* End of About Section */}

      {/* Start of Reviews Wrapper */}
      <div className="reviews-wrapper">
        {/* Start of Reviews Section */}
        <section id="reviews">
          <h2>Visitor Reviews</h2>
          {/* Start of Reviews Carousel */}
          <div id="reviewsCarousel" className="carousel slide">
            {/* Carousel Indicators */}
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#reviewsCarousel"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#reviewsCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#reviewsCarousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            {/* Start of Inner Carousel Content */}
            <div className="carousel-inner">
              {/* Start of First Carousel Item, Each Item Holds Two Cards. */}
              <div className="carousel-item active">
                <div className="row justify-content-center reviews-container">
                  <div className="col-lg-6 mx-auto">
                    <div className="review">
                      <div>
                        <img src={reviewImage} alt="Review Portrait Image" />
                        <article>
                          <h3>Laura Ingraham</h3>
                          <p>Connecticut, United States</p>
                        </article>
                      </div>
                      <p className="review-content">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Repellendus vitae, suscipit perferendis ipsum,
                        cumque soluta in quae, distinctio alias sint est
                        blanditiis commodi delectus fuga consequatur quis
                        dolorem eaque porro.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 mx-auto d-none d-lg-block">
                    <div className="review">
                      <div>
                        <img src={reviewImage} alt="Review Portrait Image" />
                        <article>
                          <h3>John Doe</h3>
                          <p>New York, United States</p>
                        </article>
                      </div>
                      <p className="review-content">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Repellendus vitae, suscipit perferendis ipsum,
                        cumque soluta in quae, distinctio alias sint est
                        blanditiis commodi delectus fuga consequatur quis
                        dolorem eaque porro.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End of First Carousel Item */}

              {/* Start of Second Carousel Item */}
              <div className="carousel-item">
                <div className="row reviews-container">
                  <div className="col-lg-6 mx-auto">
                    <div className="review">
                      <div>
                        <img src={reviewImage} alt="Review Portrait Image" />
                        <article>
                          <h3>Jane Doe</h3>
                          <p>California, United States</p>
                        </article>
                      </div>
                      <p className="review-content">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Repellendus vitae, suscipit perferendis ipsum,
                        cumque soluta in quae, distinctio alias sint est
                        blanditiis commodi delectus fuga consequatur quis
                        dolorem eaque porro.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 mx-auto d-none d-lg-block">
                    <div className="review">
                      <div>
                        <img src={reviewImage} alt="Review Portrait Image" />
                        <article>
                          <h3>Chris Smith</h3>
                          <p>Texas, United States</p>
                        </article>
                      </div>
                      <p className="review-content">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Repellendus vitae, suscipit perferendis ipsum,
                        cumque soluta in quae, distinctio alias sint est
                        blanditiis commodi delectus fuga consequatur quis
                        dolorem eaque porro.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End of Second Carousel Item */}

              {/* Start of Third Carousel Item */}
              <div className="carousel-item">
                <div className="row reviews-container">
                  <div className="col-lg-6 mx-auto">
                    <div className="review">
                      <div>
                        <img src={reviewImage} alt="Review Portrait Image" />
                        <article>
                          <h3>Jeffrey Rehal</h3>
                          <p>Newmarket, Ontario</p>
                        </article>
                      </div>
                      <p className="review-content">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Repellendus vitae, suscipit perferendis ipsum,
                        cumque soluta in quae, distinctio alias sint est
                        blanditiis commodi delectus fuga consequatur quis
                        dolorem eaque porro.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 mx-auto d-none d-lg-block">
                    <div className="review">
                      <div>
                        <img src={reviewImage} alt="Review Portrait Image" />
                        <article>
                          <h3>Monica Decabre</h3>
                          <p>Ohio, United States</p>
                        </article>
                      </div>
                      <p className="review-content">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Repellendus vitae, suscipit perferendis ipsum,
                        cumque soluta in quae, distinctio alias sint est
                        blanditiis commodi delectus fuga consequatur quis
                        dolorem eaque porro.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End of Third Carousel Item */}
            </div>
            {/* End of Inner Carousel Content */}

            {/* Carousel Control Buttons, Next & Previous, Can always customize the icons to use SVGs of our choosing. */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#reviewsCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#reviewsCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          {/* End of Reviews Carousel */}
        </section>
        {/* End of Reviews Section */}
      </div>
      {/* End of Reviews Wrapper */}

      {/* Start of FAQS Wrapper */}
      <div className="faq-wrapper">
        {/* Start of FAQS Section */}
        <section id="faq">
          <h2>Frequently Asked Questions</h2>

          {/* Start of Accordion Container */}
          <div className="accordion accordion-flush" id="faq-accordion">
            {/* Question 1 Accordion Item */}
            <article className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  What is SmartBeach and how does it work?
                </button>
              </h2>

              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="faq-accordion"
              >
                <div className="accordion-body">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis unde consequatur sunt fugiat voluptatibus voluptatem
                    doloremque adipisci nemo, veniam, velit qui! Neque nihil
                    consequuntur repellendus est suscipit doloremque
                    voluptatibus minima tenetur illum assumenda excepturi
                    tempore, laboriosam commodi saepe sunt! Accusamus eius animi
                    dolore dignissimos mollitia? A fugiat corporis explicabo
                    sapiente!
                  </p>
                </div>
              </div>
            </article>

            {/* Question 2 Accordion Item */}
            <article className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  What type of information does SmartBeach provide about beach
                  facilities?
                </button>
              </h2>

              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="faq-accordion"
              >
                <div className="accordion-body">
                  <p>
                    SmartBeach not only focuses on water conditions but also
                    offers detailed information about beach facilities. You can
                    find details about amenities such as restrooms, lifeguard
                    availability, beach equipment rentals, and more. This
                    ensures you have all the information you need for a
                    comfortable and enjoyable day at the beach.
                  </p>
                </div>
              </div>
            </article>

            {/* Question 3 Accordion Item */}
            <article className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Can Smart Beach help me plan activities at the beach?
                </button>
              </h2>

              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="faq-accordion"
              >
                <div className="accordion-body">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis unde consequatur sunt fugiat voluptatibus voluptatem
                    doloremque adipisci nemo, veniam, velit qui! Neque nihil
                    consequuntur repellendus est suscipit doloremque
                    voluptatibus minima tenetur illum assumenda excepturi
                    tempore, laboriosam commodi saepe sunt! Accusamus eius animi
                    dolore dignissimos mollitia? A fugiat corporis explicabo
                    sapiente!
                  </p>
                </div>
              </div>
            </article>

            {/* Question 4 Accordion Item */}
            <article className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Are there any safety alerts provided by SmartBeach?
                </button>
              </h2>

              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="faq-accordion"
              >
                <div className="accordion-body">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis unde consequatur sunt fugiat voluptatibus voluptatem
                    doloremque adipisci nemo, veniam, velit qui! Neque nihil
                    consequuntur repellendus est suscipit doloremque
                    voluptatibus minima tenetur illum assumenda excepturi
                    tempore, laboriosam commodi saepe sunt! Accusamus eius animi
                    dolore dignissimos mollitia? A fugiat corporis explicabo
                    sapiente!
                  </p>
                </div>
              </div>
            </article>

            {/* Question 5 Accordion Item */}
            <article className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  How can I contribute to Smart Beach and share my experiences?
                </button>
              </h2>

              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="faq-accordion"
              >
                <div className="accordion-body">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis unde consequatur sunt fugiat voluptatibus voluptatem
                    doloremque adipisci nemo, veniam, velit qui! Neque nihil
                    consequuntur repellendus est suscipit doloremque
                    voluptatibus minima tenetur illum assumenda excepturi
                    tempore, laboriosam commodi saepe sunt! Accusamus eius animi
                    dolore dignissimos mollitia? A fugiat corporis explicabo
                    sapiente!
                  </p>
                </div>
              </div>
            </article>
          </div>
          {/* End of Accordion Container */}

          {/* Life Buoy Image to be Positioned Absolutely, Relative to the Accordion Container */}
          <img src={lifeBuoy} alt="Life Buoy" className="life-buoy" />
        </section>
        {/* End of FAQS Section */}
      </div>
      {/* End of FAQS Wrapper */}
    </div>
  );
}
export default Home;
