// Importing React Router.
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Importing createContext, useState, and useEffect hooks.
import React, { createContext, useState, useEffect } from 'react';

// Normalize CSS Before Custom Styles.
import './css/normalize.css';
// Custom Styles.
import './css/App.css';

// Importing shared Header and Footer components.
import Header from './views/shared/Header.jsx';
import Footer from './views/shared/Footer.jsx';

import BeachInfo from './views/BeachInfo.jsx';

function App() {

  return (
    <div className='App'>
      <Header />
        <main>
          {/* Start of Browser Router Wrapper */}
          <BrowserRouter>
            {/* Application Routes Here */}
            <Routes>    
            <Route path="/beachinfo" element={<BeachInfo />} />      
              {/* Place Page Component Routes Here (e.g. Home, About, Dashboard, etc.) */}
            </Routes>            
          </BrowserRouter>
          {/* End of Browser Router Wrapper */}
        </main>
      <Footer />
    </div>
  );
}

export default App