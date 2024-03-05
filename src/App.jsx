// Importing React Router.
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Importing createContext, useState, and useEffect hooks.
import React, { createContext, useState, useEffect } from "react";

// Importing shared Header and Footer components.
import Header from "./views/shared/Header.jsx";
import Footer from "./views/shared/Footer.jsx";

// Imports for Page Views
import Home from "./views/Home.jsx";
import BeachInfo from "./views/BeachInfo.jsx";
import Dashboard from "./views/Dashboard.jsx";
import Contact from "./views/Contact.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {/* Start of Browser Router Wrapper */}
        <BrowserRouter>
          {/* Application Routes Here */}
          <Routes>
            {/* Place Page Component Routes Here (e.g. Home, About, Dashboard, etc.) */}
            <Route path="/" element={<Home />} />
            <Route path="/beach-info" element={<BeachInfo />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
        {/* End of Browser Router Wrapper */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
