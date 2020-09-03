import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

const Follow = () => {
    return (
        <div className="follow">
                    <div className="section text-center">
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                            <div className="title">
                                <h1>Follow us on</h1>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp" delay={200} animateOnce={true}>
                            <div className="">
                                <a rel="noopener noreferrer" href="jsx-a11y/href-no-hash" target="_blank"><img src={require('../images/social-icon-facebook.svg')} className="social-icon" alt="" /></a>
                                <a rel="noopener noreferrer" href="jsx-a11y/href-no-hash" target="_blank"><img src={require('../images/social-icon-twitter.svg')} className="social-icon" alt="" /></a>
                                <a rel="noopener noreferrer" href="jsx-a11y/href-no-hash" target="_blank"><img src={require('../images/social-icon-linkedin.svg')} className="social-icon" alt="" /></a>
                                <a rel="noopener noreferrer" href="jsx-a11y/href-no-hash" target="_blank"><img src={require('../images/social-icon-instagram.svg')} className="social-icon" alt="" /></a>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
    )
}

export default Follow
