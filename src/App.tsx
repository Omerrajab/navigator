import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Header from './components/Header/Header';
import NavBar from './components/Navbar/NavBar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Blog } from './pages/Blog/Blog';
import { Contact } from './pages/Contact/Contact';
import MenuBar from './components/MenuBar/MenuBar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        {/* <MenuBar /> */}
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>

    </div>
  );
}

export default App;
