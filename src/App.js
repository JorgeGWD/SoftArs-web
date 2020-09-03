import React from 'react'
import './App.css';
import 'animate.css/animate.min.css'

// components

import Header from './components/header'
import Home from './components/home'
import Slider from './components/slider'
import Technology from './components/technology'
import Videogame from './components/videogame'
import Experience from './components/experience'
import Follow from './components/follow'
import Footer from './components/footer'
import Contact from './components/contact'

const App = () =>  {
    return (
        <div className="App">
            <Contact />
            <Header />
            <Home />
            <Slider />
            <Technology />
            <Videogame />
            <Experience />
            <Follow />
            <Footer />
        </div>
    );
}

export default App;
