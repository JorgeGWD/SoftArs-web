import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

const Videogame = () => {
    return (
        <div className="videogame">
                    <div className="section">
                        <div className="inerbox">
                            <div className="text-center">
                                <ScrollAnimation animateIn="fadeInDown" animateOnce={true}>
                                    <div className="title">
                                        <img src={require('../images/title-icon-gamedev.svg')} className="softars-icon" alt="" />
                                        <h1>Ready for gaming</h1>
                                    </div>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                                    <p>Get involved with the business of videogames.</p>
                                </ScrollAnimation>
                                <ul className="engines">
                                    <ScrollAnimation animateIn="fadeInRight" delay={0} animateOnce={true}>
                                        <li className="grid-item"><img src={require('../images/engine-icon-defold.svg')} className="engine-icon" alt="" /></li>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateIn="fadeInRight" delay={200} animateOnce={true}>
                                        <li className="grid-item"><img src={require('../images/engine-icon-unity.svg')} className="engine-icon" alt="" /></li>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateIn="fadeInRight" delay={400} animateOnce={true}>
                                        <li className="grid-item"><img src={require('../images/engine-icon-corona.svg')} className="engine-icon" alt="" /></li>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateIn="fadeInRight" delay={600} animateOnce={true}>
                                        <li className="grid-item"><img src={require('../images/engine-icon-unreal.svg')} className="engine-icon" alt="" /></li>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateIn="fadeInRight" delay={800} animateOnce={true}>
                                        <li className="grid-item"><img src={require('../images/engine-icon-godot.svg')} className="engine-icon" alt="" /></li>
                                    </ScrollAnimation>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default Videogame
