import React, { useState, useEffect } from 'react'

const Contact = () => {

    const [ data, setData ] = useState({
        name: '',
        country: '',
        email: '',
        message: ''
    })

    const [ open, setOpen ] = useState(false)

    const [ errors, setErrors ] = useState({})

    const [ isSubmitting, setIsSubmitting ] = useState(false)
 
    const handleChange = (e) => {
        // console.log(e.target.value)

        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    const validateInfo = (data) => {
        let errors = {}
    
        if(!data.name.trim()) {
            errors.name = "This field is required"
        }
    
        if(!data.country) {
            errors.country = "This field is required"
        }

        if(!data.email) {
            errors.email = "This field is required"
        } else if(!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = "Invalid email"
        }

        if(!data.message) {
            errors.message = "This field is required"
        }
        
        return errors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!data.name || !data.country || !data.email || !data.message) {
            setErrors(validateInfo(data))

            // console.log('Error')
            
        } else {
            setErrors(validateInfo(data))

            setIsSubmitting(true)
            
            // console.log(data)
            
            setOpen(false)

            e.target.reset()

        }

    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting) {
            // console.log(data)

            setData(prevState => {
                return {...prevState, name: '', country: '', email: '', message: ''}
            })
        }
    }, [errors])

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
                            <div className="input-area">
                                <input
                                    id="name"
                                    type="text"
                                    label="Enterprise"
                                    name="name"
                                    placeholder=" "
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="name">Enterprise</label>
                                <div  className="text-error">
                                    {errors.name && <p>{errors.name}</p>}
                                </div>
                            </div>
                            <div className="input-area">
                                <input
                                    id="country"
                                    type="text"
                                    label="Country"
                                    name="country"
                                    placeholder=" "
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="country">Country</label>
                                <div className="text-error">
                                    {errors.country && <p>{errors.country}</p>}
                                </div>
                            </div>
                            <div className="input-area">
                                <input
                                    id="email"
                                    type="email"
                                    label="Your email"
                                    name="email"
                                    placeholder=" "
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="email">Your email</label>
                                <div className="text-error">
                                    {errors.email && <p>{errors.email}</p>}
                                </div>
                            </div>
                            <div className="text-area">
                                <textarea
                                    id="message"
                                    label="Your message"
                                    name="message"
                                    rows="4"
                                    placeholder=" "
                                    defaultValue=""
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="message">Your message</label>
                                <div className="text-error">
                                    {errors.message && <p>{errors.message}</p>}
                                </div>
                            </div>
                        </div>
                        <button className="submit" type="submit">Send</button>
                    </form>
                </div>
            </div>
            <div className={isSubmitting ? "confirmation active" : "confirmation"}>
                <div className="confirmation-content">
                    <h2>Great!</h2>
                    <p>Thank you for contacting us <br/>You’ll hear from us soon enough</p>
                    <button className="send" onClick={() => { setIsSubmitting(!isSubmitting) }}>Okay</button>
                </div>
            </div>
        </div>
    )
}

export default Contact