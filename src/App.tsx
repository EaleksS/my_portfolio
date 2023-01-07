import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';

function App() {
  return (
    <div className="wrapper">
      <Nav />
      <Header />
      <Resume />
      <Portfolio />
    </div>
  );
}

export default App;
