import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

const Technology = () => {
    return (
        <div className="technology">
            <div className="section">
                <div className="left">
                    <div className="text-center">
                        <div className="description">
                            <ScrollAnimation animateIn="animate__fadeInDown" animateOnce={true}>
                                <div className="title">
                                    <img src={require('../images/title-icon-system.svg')} className="softars-icon" alt="" />
                                    <h1>Make it work</h1>
                                </div>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
                                <p>We use technology that allows us to develop whatever you have in mind.</p>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="text-center">
                        <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true}>
                            <img src={require('../images/brand-icon-angular.svg')} className="brand-icon" alt="" />
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true}>
                            <img src={require('../images/brand-icon-react.svg')} className="brand-icon" alt="" />
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true}>
                            <img src={require('../images/brand-icon-nodejs.svg')} className="brand-icon" alt="" />
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true}>
                            <img src={require('../images/brand-icon-bootstrap.svg')} className="brand-icon" alt="" />
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true}>
                            <img src={require('../images/brand-icon-javascript.svg')} className="brand-icon" alt="" />
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true}>
                            <img src={require('../images/brand-icon-larave.svg')} className="brand-icon" alt="" />
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technology
