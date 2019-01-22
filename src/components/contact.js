import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    menu: {
        width: 200,
    },
});

/*const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];*/

class TextFields extends React.Component {
    state = {
        name: '',
        age: '',
        multiline: '',
        currency: 'EUR',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;
        return (
            <div className="contact">
                <div className="inbox">
                    <input type="checkbox" name="" id="icon"/>
                    <label htmlFor="icon" className="icon">
                        <img src={require('../images/icon-chat-bubble.svg')} className="email-icon" alt="" />
                    </label>
                    <div className="box">
                        <p><span>Hello, we’d love to hear your ideas</span> <br/> Let us know how can we help</p>
                        <img src={require('../images/times.svg')} className="close-icon" alt="" />
                        <form className={classes.container} noValidate autoComplete="off">
                            <TextField
                                id="name"
                                label="Enterprise"
                                className={classes.textField}
                                value={this.state.name}
                                onChange={this.handleChange('name')}
                                margin="normal"
                            />
                            <TextField
                                id="country"
                                label="Country"
                                className={classes.textField}
                                value={this.state.country}
                                onChange={this.handleChange('country')}
                                margin="normal"
                            />
                            <TextField
                                id="email"
                                label="Your email"
                                className={classes.textField}
                                value={this.state.email}
                                onChange={this.handleChange('email')}
                                margin="normal"
                            />
                            <TextField
                                id="multiline-static"
                                label="Your message"
                                multiline
                                rows="4"
                                defaultValue=""
                                className={classes.textField}
                                margin="normal"
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
        );
    }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);