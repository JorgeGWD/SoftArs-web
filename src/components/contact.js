import React, { useState } from 'react'

const Contact = () => {

    const [ open, setOpen ] = useState(false)
 
    const handleChange = () => {

    }

    return (
        <div className="contact">
            <div className="inbox">
                <label htmlFor="icon" className="icon" onClick={() => { setOpen(!open); }}>
                    <img src={require('../images/icon-chat-bubble.svg')} className={open ? "email-icon hide" : "email-icon"} alt="Email" />
                </label>
                <div className={open ? "box" : "box hide"}>
                    <p><span>Hello, we’d love to hear your ideas</span> <br/> Let us know how can we help</p>
                    <img src={require('../images/times.svg')} className="close-icon" alt="Close" onClick={() => { setOpen(!open); }} />
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
                        <button className="submit" type="submit">Send</button>
                    </form>
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