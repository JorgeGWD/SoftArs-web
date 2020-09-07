import React from 'react'

const Contact = () => {
 
    const handleChange = () => {

    }

    return (
        <div className="contact">
            <div className="inbox">
                <input type="checkbox" name="" id="icon"/>
                <label htmlFor="icon" className="icon">
                    <img src={require('../images/icon-chat-bubble.svg')} className="email-icon" alt="Email" />
                </label>
                <div className="box">
                    <p><span>Hello, we’d love to hear your ideas</span> <br/> Let us know how can we help</p>
                    <img src={require('../images/times.svg')} className="close-icon" alt="Close" />
                    <form noValidate autoComplete="off">
                        <input
                            id="name"
                            label="Enterprise"
                            name="name"
                            onChange={handleChange}
                        />
                        <input
                            id="country"
                            label="Country"
                            name="country"
                            onChange={handleChange}
                        />
                        <input
                            id="email"
                            label="Your email"
                            name="email"
                            onChange={handleChange}
                        />
                        <textarea
                            id="multiline-static"
                            label="Your message"
                            rows="4"
                            defaultValue=""
                            onChange={handleChange}
                        />
                    </form>
                    <button className="send">Send</button>
                </div>
            </div>
            <div className="confirmation">
                <h2>Great!</h2>
                <p>Thank you for contacting us <br/>You’ll hear from us soon enough</p>
                <button className="send">Okay</button>
            </div>
        </div>
    )
}

export default Contact