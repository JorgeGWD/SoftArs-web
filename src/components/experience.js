import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

const Experience = () => {
    return (
        <div className="experience">
                    <div className="section">
                        <div className="left">
                        </div>
                        <div className="right">
                            <div className="text-center">
                                <div className="description">
                                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                                        <div className="title">
                                            <h1>Custom experience</h1>
                                        </div>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateIn="fadeInUp" delay={200} animateOnce={true}>
                                        <p>“There’s no such thing as a dumb idea, only poorly focused. Here on Softars we work to ensure your idea stays on the right track.”</p>
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default Experience
