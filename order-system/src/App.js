import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navigation';
import HomePage from './pages/Home';
import MenuPage from './pages/Menu';
import ContactUsPage from './pages/Contact';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;