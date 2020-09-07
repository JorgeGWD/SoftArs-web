import React, { useState, useEffect, useRef } from 'react'

const Header = () => {

    const [ sticky, setSticky ] = useState({ isSticky: false, offset: 0 });

    const ref = useRef(null);

    const handleScroll = () => {
        if (window.pageYOffset > 0 ) {
          setSticky({ isSticky: true });
        } else {
          setSticky({ isSticky: false, offset: 0 });
        }
    };

      useEffect(() => {
        var header = ref.current.getBoundingClientRect();
        const handleScrollEvent = () => {
          handleScroll(header.top, header.height)
    }
       
        window.addEventListener('scroll', handleScrollEvent);
       
        return () => {
          window.removeEventListener('scroll', handleScrollEvent);
        };
    }, []);

    return (
        <header className={`header${sticky.isSticky ? ' sticky' : ''}`} ref={ref}>
            <a href="jsx-a11y/anchor-is-valid"><img src={require('../images/logo-softars.svg')} className="App-logo" alt="SoftArs" /></a>
        </header>
    )
}

export default Header
