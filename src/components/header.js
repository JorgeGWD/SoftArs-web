import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <header className="App-header">
                    <a href=""><img src={require('../images/logo-softars.svg')} className="App-logo" alt="SoftArs" /></a>
                </header>
            </div>
        );
    }
}

export default Header;