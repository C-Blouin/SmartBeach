import React, { useEffect } from "react";
import lifeBuoy from "../images/about/life-buoy.png";

function About() {
  useEffect(() => {
    document.title = "Smart Beach | About the project";
  }, []);
  return (
    <div className="about-container">
      <div className="about-the-project">
        {/* <section className="about-the-project-header row"></section> */}
        <div className="container">
          <h1>About the Project</h1>
          <section className="about-the-project-info">
            <img src={lifeBuoy} width="325" height="325" alt="Life Buoy" />
            <article>
              <p>
                Welcome to the official website of the SmartBeach project at
                Station Beach in Kincardine, Ontario, led by Dr. Chris Houser from
                the University of Waterloo. Our initiative aims to develop an
                integrated sensor network that will provide a real-time and
                locally calibrated risk and hazard warning system for beach users
                and local authorities.
              </p>
              <p>
                Dr. Houser, the Dean of the Faculty of Science at the University
                of Waterloo, heads the Coastal Research Group. This team of
                dedicated researchers assesses drowning hazards posed by rip
                currents in various field sites, including the Great Lakes, the
                Maritimes, and Costa Rica.
              </p>
              <p>
                Our research has shown that traditional warning signs often go
                unnoticed by beachgoers, or are misinterpreted. To address this,
                we are developing an accurate and dynamic warning system that will
                guide the behavior of beach users and help prevent potential
                accidents.
              </p>
              <p>
                We are deeply concerned about the rising number of drownings in
                the Great Lakes. In 2022 alone, there have been 47 confirmed
                drownings and 12 rescues. Since 2010, 1,093 drownings have been
                confirmed in the Great Lakes. By utilizing a buoy at
                Kincardine’s Station Beach, our team is actively collecting data to examine
                if tracking inshore water movement (wave conditions and currents) can help us reduce drowning incidents.
              </p>
              <p>
                We believe that our work can help save lives and create a safer
                beach experience for all. Thank you for visiting our page and for
                your interest in our project.
              </p>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;
