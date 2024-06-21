// Import React library
import React from 'react';
// Import ReactDOM client
import ReactDOM from 'react-dom/client';
// Import BrowserRouter and Routes for routing
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Import CSS file
import "./index.css";

// Import App component
import App from './App';

// Import other components
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';

// Create a root element using ReactDOM.createRoot() and select the HTML element with an ID of 'root' as the container
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root element with routing
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* Example routes */}
          <Route path="nav" element={<Nav />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="resume" element={<Resume />} />
          <Route path="footer" element={<Footer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
