import React, { useState } from 'react'

const Contact = () => {

    const [ data, setData ] = useState()

    const [ open, setOpen ] = useState(false)
 
    const handleChange = (e) => {
        // console.log(e.target.value)

        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
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
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <div className="form-data">
                            <input
                                id="name"
                                type="text"
                                label="Enterprise"
                                name="name"
                                placeholder=" "
                                onChange={handleChange}
                            />
                            <label htmlFor="name">Enterprise</label>
                            <input
                                id="country"
                                type="text"
                                label="Country"
                                name="country"
                                placeholder=" "
                                onChange={handleChange}
                            />
                            <label htmlFor="country">Country</label>
                            <input
                                id="email"
                                type="email"
                                label="Your email"
                                name="email"
                                placeholder=" "
                                onChange={handleChange}
                            />
                            <label htmlFor="email">Your email</label>
                            <textarea
                                id="message"
                                label="Your message"
                                name="message"
                                rows="4"
                                defaultValue=""
                                onChange={handleChange}
                            />
                        </div>
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