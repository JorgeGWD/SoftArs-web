import React from 'react'
import 'animate.css/animate.min.css'
import ScrollAnimation from 'react-animate-on-scroll'

const Home = () => {
    return (
        <div className="home">
            <div className="main">
                <div className="text-center">
                    <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
                        <h1>Coding the <strong>future</strong></h1>
                        <h2>Connect with the online business</h2>
                    </ScrollAnimation>
                </div>
                <div className="screen text-center">
                    <img src={require('../images/home_codebars.gif')} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Home
