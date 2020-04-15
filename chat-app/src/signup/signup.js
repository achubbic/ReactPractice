import React from 'react';

import { Link } from 'react-router-dom';

import styles from './styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
// import { InputLabel } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const firebase = require('firebase');

class SignupComponent extends React.Component {

    render() {
        //destructuring. can use classes. instead of this.props.classes
        const { classes } = this.props;

        return(
            <main className = {classes.main}>
                <CssBaseline></CssBaseline>
                <Paper className={classes.Paper}>
                    <Typography components='h1' variant='h5'>
                        Sign up!
                    </Typography>
                    {/* by defualt submit event is passed as arg */}
                    <form onSubmit={(e) => this.submitSignup(e)} className={classes.form}>
                        <FormControl required fullWidth margin = 'normal'>
                            <InputLabel htmlFor='signup-email-input'>Enter your Email</InputLabel>
                            {/* autofocus = automatically awaiting text when user opens form */}
                            {/* onChange = whenever user is typing, call this function */}
                            <Input autoComplete='email' onChange={(e) => this.userTyping('email', e)} autofocus id='signup-email-input'></Input>
                        </FormControl>

                        <FormControl required fullWidth margin='normal'>
                            <InputLabel htmlFor = 'signup-password-input'>Create A Password</InputLabel>
                            <Input type='password' onChange={(e) => this.userTyping('password', e)} id = 'signup-password-input'></Input>
                        </FormControl>

                        <FormControl required fullWidth margin='normal'>
                            <InputLabel htmlFor = 'signup-password-confirm-input'>Confirm Your Password</InputLabel>
                            <Input type='password' onChange={(e) => this.userTyping('password-confirm', e)} id = 'signup-password-confirm-input'></Input>
                        </FormControl>
                        <Button type='submit' variant='contained' color='primary' className={classes.submit}Submit>Create Account</Button>
                    </form>
                    <Typography component='h5' variant='h6' className={classes.hasAccountHear}>Already Have An Account?</Typography>
                    <Link className={classes.logInLink} to='/login'>Log in here!</Link>
                </Paper>
            </main>
        );
    }

    userTyping = (type, e) => {
        console.log(type, e);
    }

    submitSignup = (e) => {
        console.log("submitting");
    }
}

export default withStyles(styles)(SignupComponent);