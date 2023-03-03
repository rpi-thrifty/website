import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from './pages/home.js';
import { AboutPage } from './pages/about.js';
import { ItemPage } from './pages/itempage.js';
import { SubmitPage } from './pages/submit.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/itempage" element ={<ItemPage />} />
        <Route path="/submit" element={<SubmitPage />} />
        {/* might need for the future */}
        {/* <Route path="/items" element={<ItemPage />} /> */}
        <Route path="*" element={<h1>Error 404: Page not found</h1>}/>
      </Routes>
    </Router>
  );

}

export default App;
