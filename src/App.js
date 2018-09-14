import React, { Component } from 'react';
import './App.css';
// import './js/script';

// components

import Contact from './components/contact';
import Header from './components/header';
import Home from './components/home';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (

      <div className="App">
        
        <Contact />
        <Header />
        <Home />
        <Footer />

      </div>
      
    );
  }
}

export default App;
