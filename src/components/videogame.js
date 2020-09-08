import React from 'react'
import '../sass/styles.css'
import ScrollAnimation from 'react-animate-on-scroll'

const Videogame = () => {
    return (
        <div className="videogame">
                    <div className="section">
                        <div className="inerbox">
                            <div className="text-center">
                                <ScrollAnimation animateIn="animate__fadeInDown" animateOnce={true}>
                                    <div className="title">
                                        <img src={require('../images/title-icon-gamedev.svg')} className="softars-icon" alt="" />
                                        <h1>Ready for gaming</h1>
                                    </div>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true}>
                                    <p>Get involved with the business of videogames.</p>
                                </ScrollAnimation>
                                <ul className="engines">
                                    <ScrollAnimation animateIn="animate__fadeInRight" delay={0} animateOnce={true}>
                                        <li className="grid-item defold"><img src={require('../images/engine-icon-defold.svg')} className="engine-icon" alt="" /></li>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateIn="animate__fadeInRight" delay={200} animateOnce={true}>
                                        <li className="grid-item unity"><img src={require('../images/engine-icon-unity.svg')} className="engine-icon" alt="" /></li>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateIn="animate__fadeInRight" delay={400} animateOnce={true}>
                                        <li className="grid-item corona"><img src={require('../images/engine-icon-corona.svg')} className="engine-icon" alt="" /></li>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateIn="animate__fadeInRight" delay={600} animateOnce={true}>
                                        <li className="grid-item unreal"><img src={require('../images/engine-icon-unreal.svg')} className="engine-icon" alt="" /></li>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateIn="animate__fadeInRight" delay={800} animateOnce={true}>
                                        <li className="grid-item godot"><img src={require('../images/engine-icon-godot.svg')} className="engine-icon" alt="" /></li>
                                    </ScrollAnimation>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default Videogame
