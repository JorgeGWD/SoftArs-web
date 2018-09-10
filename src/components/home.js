import React, { Component } from 'react';

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
                <div className="slider">
                    <div className="section">
                        <img src={require('../images/icon-dialog.svg')} className="softars-icon" alt="" />
                        <div className="title">
                            <h1>Let’s talk about it</h1>
                        </div>
                        <p>Our team is ready to advise you in your project’s development. <br/> We’ll find the best way to balance technology, eficiency and design.</p>
                    </div>
                </div>
                <div className="technology">
                    <div className="section">
                        <div className="left">
                            <div className="text-center">
                                <div className="description">
                                    <div className="title">
                                        <h1>Make it work</h1>
                                        <img src={require('../images/icon-system.svg')} className="softars-icon" alt="" />
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
                        <div className="bottom">
                            <img src={require('../images/brand-icon-unity.svg')} className="brand-icon" alt="" />
                            <p>Get involved with the business of videogames</p>
                        </div>
                    </div>
                </div>
                <div className="testimony">
                    <div className="section">
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;