import React, { Component } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const content = [
    {
        title: 'Let’s talk about it',
        description:
            'Our team is ready to advise you in your project’s development. We’ll find the best way to balance technology, eficiency and design.',
    },
    {
        title: 'Mobile dev',
        description:
            'We like to develope accesible software with user-center design. You’ll be able to reach anyone, anywhere.',
        image: 'http://softars.com/static/media/services-mobile.png',
        animation: 'http://softars.com/static/media/animation-mobile.html',
    },
    {
        title: 'Desktop design',
        description:
            'We build a screen friendly experience. Navegate freely with a beautiful and highly functional design aimed at your needs.',
        image: 'http://softars.com/static/media/services-desktop.png',
    }
];
console.log(content)

class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="main">
                    <div className="text-center">
                        <h1>Coding the <strong>future</strong></h1>
                        <h2>Connect with the online business</h2>
                    </div>
                </div>
                <div className="sliderbox">
                    <Slider className="slider-wrapper" duration="500">
                        {content.map((item, index) => (
                            <div
                                key={index}
                                className={index != 0 ? "slider-content double" : "slider-content single" }
                            >
                                <div className="inner">
                                    <div className="title">
                                        <h1>{item.title}</h1>
                                    </div>
                                    <p>{item.description}</p>
                                </div>
                                <div className="animation">
                                    <img src={item.animation} alt=""/>
                                    <p>animation</p>
                                </div>
                                <div className="image">
                                    <img src={item.image} alt="" />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="technology">
                    <div className="section">
                        <div className="left">
                            <div className="text-center">
                                <div className="description">
                                    <div className="title">
                                        <h1>Make it work</h1>
                                        <img src={require('../images/title-icon-system.svg')} className="softars-icon" alt="" />
                                    </div>
                                    <p>We use technology that allows us to develope whatever you have in mind.</p>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="text-center">
                                <img src={require('../images/brand-icon-angular.svg')} className="brand-icon" alt="" />
                                <img src={require('../images/brand-icon-react.svg')} className="brand-icon" alt="" />
                                <img src={require('../images/brand-icon-nodejs.svg')} className="brand-icon" alt="" />
                                <img src={require('../images/brand-icon-bootstrap.svg')} className="brand-icon" alt="" />
                                <img src={require('../images/brand-icon-javascript.svg')} className="brand-icon" alt="" />
                                <img src={require('../images/brand-icon-larave.svg')} className="brand-icon" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="videogame">
                    <div className="section">
                        <div className="inerbox">
                            <div className="text-center">
                                <div className="title">
                                    <h1>Ready for gaming</h1>
                                    <img src={require('../images/title-icon-gamedev.svg')} className="softars-icon" alt="" />
                                </div>
                                <p>Get involved with the business of videogames.</p>
                                <div className="engines">
                                    <img src={require('../images/engine-icon-defold.svg')} className="engine-icon" alt="" />
                                    <img src={require('../images/engine-icon-unity.svg')} className="engine-icon" alt="" />
                                    <img src={require('../images/engine-icon-corona.svg')} className="engine-icon" alt="" />
                                    <img src={require('../images/engine-icon-unreal.svg')} className="engine-icon" alt="" />
                                    <img src={require('../images/engine-icon-godot.svg')} className="engine-icon" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="experience">
                    <div className="section">
                        <div className="left">
                        </div>
                        <div className="right">
                            <div className="text-center">
                                <div className="description">
                                    <div className="title">
                                        <h1>Custom experience</h1>
                                    </div>
                                    <p>“There’s no such thing as a dumb idea, only poorly focused. Here on Softars we work to ensure your idea stays on the right track.”</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="follow">
                    <div className="section text-center">
                        <div className="title">
                            <h1>Follow us on</h1>
                        </div>
                        <div className="">
                            <img src={require('../images/social-icon-facebook.svg')} className="social-icon" alt="" />
                            <img src={require('../images/social-icon-twitter.svg')} className="social-icon" alt="" />
                            <img src={require('../images/social-icon-linkedin.svg')} className="social-icon" alt="" />
                            <img src={require('../images/social-icon-instagram.svg')} className="social-icon" alt="" />
                            <img src={require('../images/social-icon-g+.svg')} className="social-icon" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;