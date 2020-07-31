import React, { Component } from 'react';

class Footer extends Component {
    getYear() {
        return new Date().getFullYear();
    }

    render() {
        return (
            <div className="footer">
                <p>SoftArs &copy; {new Date().getFullYear()}</p>
            </div>
        );
    }
}

export default Footer;