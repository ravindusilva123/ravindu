import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdmissionList from './AdmissionList';
import AdmissionAdd from './AdmissionAdd';

  
const App = () => {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<AdmissionList />} />
              <Route path="/add" element={<AdmissionAdd />} />
          </Routes>
      </Router>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );  
}

export default App;
