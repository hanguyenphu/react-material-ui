import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles(theme => ({
    root: {
        height: "100vh"
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    handleClose = () => {
        this.setState({
            open: false
        });
    };

    handleClickOpen = () => {
        this.setState({
            open: true
        });
    };

    render() {
        const classes = useStyles;
        const { open } = this.state;
        return (
            <div>
                {/* <Button
                    variant='outlined'
                    color='primary'
                    onClick={this.handleClickOpen}
                >
                    Login Dialog
                </Button> */}
                <AccountCircle  onClick={this.handleClickOpen}/>
                <Dialog
                    // fullScreen
                    open={open}
                    onClose={this.handleClose}
                >
                    <AppBar>
                        <Toolbar>
                            <IconButton
                                edge='start'
                                color='inherit'
                                onClick={this.handleClose}
                                aria-label='close'
                            >
                                <CloseIcon />
                            </IconButton>
                            <Typography variant='h6'>
                                Sign in / Sign up
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Grid
                        style={{ padding: 100 }}
                        item
                        xs
                        sm
                        md
                        component={Paper}
                        elevation={6}
                        square
                    >
                        <div className={classes.paper}>
                            <Avatar className={classes.avatar}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component='h1' variant='h5'>
                                Sign in
                            </Typography>
                            <form className={classes.form} noValidate>
                                <TextField
                                    variant='outlined'
                                    margin='normal'
                                    required
                                    fullWidth
                                    id='email'
                                    label='Email Address'
                                    name='email'
                                    autoComplete='email'
                                    autoFocus
                                />
                                <TextField
                                    variant='outlined'
                                    margin='normal'
                                    required
                                    fullWidth
                                    name='password'
                                    label='Password'
                                    type='password'
                                    id='password'
                                    autoComplete='current-password'
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value='remember'
                                            color='primary'
                                        />
                                    }
                                    label='Remember me'
                                />
                                <Button
                                    type='submit'
                                    fullWidth
                                    variant='contained'
                                    color='primary'
                                    className={classes.submit}
                                >
                                    Sign In
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href='#' variant='body2'>
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href='#' variant='body2'>
                                            {"Don't have an account?"}
                                        </Link>
                                    </Grid>
                                </Grid>
                                <Box mt={5}></Box>
                            </form>
                        </div>
                    </Grid>
                </Dialog>
            </div>
        );
    }
}

export default Login;
