import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navigation';
import HomePage from './pages/Home';
import MenuPage from './pages/Menu';
import ContactUsPage from './pages/Contact';
import FAQPage from './pages/FAQ';
import AboutUsPage from './pages/About';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu"element={<MenuPage/>}/>
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/FAQ" element={<FAQPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
