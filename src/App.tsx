import React from 'react';
import './App.scss';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <div className="wrapper">
      <Nav />
      <Header />
      <Resume />
      <Portfolio />
      <Testimonials />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
