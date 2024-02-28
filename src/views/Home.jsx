// Global React Imports.
import React from "react";
import { useState, useEffect, useContext } from "react";

// Hero Forecast Widget Icon Imports.
import thunderstorm from "../images/landing/forecast-icons/thunderstorms.svg";
import windSpeed from "../images/landing/forecast-icons/wind.svg";
import rainChance from "../images/landing/forecast-icons/umbrella.svg";

// Indicators Imports.
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

	// Setting Document Title for the Home Page.
	useEffect(() => {
	document.title = 'Smart Beach | Home';
	},[]);

	return (

		<div className="container-fluid p-0">

		 	{/* Start of Hero Wrapper */}
			<div className="hero-wrapper">

				{/* Start of Hero Section */}
				<div id="hero">
					
					{/* Start of Hero Content */}
					<section className="hero-content">
						<h1>Station Beach <br /> Kincardine</h1>
						<p>
							Transitioning current data into safe swimming.
						</p>
					</section>
					{/* End of Hero Content */}

					{/* Start of Hero Forecast */}
					<div className="hero-forecast">

						{/* Primary Card */}
						<div className="primary-card">
							<img src={thunderstorm} alt="Thunderstorm" />
							<div className="primary-card-content">
								<article>
									<h3>24°</h3>
									<p>Thunderstorms</p>
								</article>
								<div className="temperature-container">
									<div>   
										<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16"><path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
										</svg>                                 
										<p>34°</p>
									</div>
									<div> 
										<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16"><path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
										</svg>                                   
										<p>22°</p>
									</div>
								</div>
							</div>        
						</div>

						{/* Sub Card One */}
						<article className="widget-card">
							<div className="widget-top">
								<p>Wind Speed</p>
								<img src={dangerIndicator} alt="Danger Indicator" className="safety-indicators" />
							</div>
							<img src={windSpeed} alt="Wind Speed Icon" />     
							<p>103 <small>km/h</small></p>
						</article>

						{/* Sub Card Two */}
						<article className="widget-card">
							<div className="widget-top">
								<p>Wind Gust</p>
								<img src={cautionIndicator} alt="Caution Indicator" className="safety-indicators" />
							</div>
							<img src={windSpeed} alt="Wind Gust Icon" />     
							<p>54 <small>km/h</small></p>
						</article>

						{/* Sub Card Three */}
						<article className="widget-card">
							<div className="widget-top">
								<p>Rain Chance</p>
								<img src={safeIndicator} alt="Safe Indicator" className="safety-indicators" />
							</div>
							<img src={rainChance} alt="Rain Chance Icon" />     
							<p>20%</p>
						</article>
							
						{/* Sub Card Four */}
						<article className="widget-card">
							<div className="widget-top">
								<p>Rain Chance</p>
								<img src={dangerIndicator} alt="Danger Indicator" className="safety-indicators" />
							</div>
							<img src={rainChance} alt="Rain Chance Icon" />     
							<p>80%</p>
						</article>

						{/* Forecast Call to Action */}
						<a href="#" id="forecast-cta">Get Full Forecast</a>

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
						accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
						illo inventore veritatis et quasi architecto beatae vitae dicta sunt
						explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque laudantium.
						</p>
						<a href="#">Read More</a>
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
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, saepe.</p>
						</div>
					</article>

					{/* Reson Two Card */}
					<article>
						<img src={reasonIcon} alt="Reason" /> 
						<div>
							<h3 className="reason-heading">Heading</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, saepe.</p>
						</div>
					</article>

					{/* Reason Three Card */}
					<article>
						<img src={reasonIcon} alt="Reason" /> 
						<div>
							<h3 className="reason-heading">Heading</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, saepe.</p>
						</div>
					</article>

					{/* Reason Four Card */}
					<article>
						<img src={reasonIcon} alt="Reason" /> 
						<div>
							<h3 className="reason-heading">Heading</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, saepe.</p>
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
							dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
							quae ab illo inventore veritatis et quasi architecto beatae vitae
							dicta sunt explicabo.
						</p>
						<p>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
							quae ab illo inventore veritatis et quasi architecto beatae vitae
							dicta sunt explicabo.
						</p>
						<a href="#">Read More</a>
					</article>
				</div>
			</div>
			{/* End of About Section */}

		</div>

	);
}
export default Home;
