import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from './pages/home.js';
import { AboutPage } from './pages/about.js';
import { SubmitPage } from './pages/submit.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/submit" element={<SubmitPage />} />
        <Route path="*" element={<h1>Error 404: Page not found</h1>}/>
      </Routes>
    </Router>
  );
}

export default App;
