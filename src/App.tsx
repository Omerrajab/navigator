import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import NavBar from './components/navbar/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
      </Router>
    
    </div>
  );
}

export default App;
