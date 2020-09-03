import React from 'react'
import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css'
import ScrollAnimation from 'react-animate-on-scroll'
import titleDialog from '../images/title-icon-dialog.svg'
import servicesMobile from '../images/services-mobile.png'
import mobileAnimation from '../images/slider-mobile.svg'
import servicesDesktop from '../images/services-desktop.png'
import desktopAnimation from '../images/slider-desktop.svg'

const content = [
    {
        title: 'Let’s talk about it',
        description:
            'Our team is ready to advise you in your project’s development. We’ll find the best way to balance technology, eficiency and design.',
        image: titleDialog,
    },
    {
        title: 'Mobile first',
        description:
            'We like to develop accesible software with user-center design. You’ll be able to reach anyone, anywhere.',
        image: servicesMobile,
        animation: mobileAnimation,
    },
    {
        title: 'Web design',
        description:
            'We build a screen friendly experience. Navegate freely with a beautiful and highly functional design aimed at your needs.',
        image: servicesDesktop,
        animation: desktopAnimation,
    }
];

const slider = () => {
    return (
        <div className="sliderbox">
            <Slider className="slider-wrapper" duration="500" infinite={true} onSlideChange={event => console.log(event)}>
                {content.map((item, index) => (
                    <div
                        key={index}
                        className={index !== 0 ? "slider-content double" : "slider-content single" }
                    >
                        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                            <div className="image">
                                <img src={item.image} alt="" />
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
                            <div className="animation">
                                <img src={item.animation} alt="" />
                            </div>
                        </ScrollAnimation>
                        <div className="inner">
                            <ScrollAnimation animateIn="fadeInDown" animateOnce={true}>
                                <div className="title">
                                    <div>
                                        <img className="softars-icon" src={item.image} alt="" />
                                    </div>
                                    <div>
                                        <h1>{item.title}</h1>
                                    </div>
                                </div>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                                <p>{item.description}</p>
                            </ScrollAnimation>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default slider
