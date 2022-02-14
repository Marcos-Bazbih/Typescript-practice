import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/pages/Home/Home';
import Student from './components/pages/Student/Student';

const App = () => {
  return (
    <div className="App">
      <h1>Typescript first lesson</h1>
        <img src={logo} className="App-logo top-left" alt="logo" />
        <img src={logo} className="App-logo top-right" alt="logo" />
        <img src={logo} className="App-logo bottom-left" alt="logo" />
        <img src={logo} className="App-logo bottom-right" alt="logo" />
        <Home />
        {/* <Student /> */}
    </div>
  );
}

export default App;