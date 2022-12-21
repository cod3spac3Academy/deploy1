import { useState } from 'react';
import { validateEmail, validatePassword } from '../../utils/validate';
import ReactDOM from 'react-dom';
import classes from './LoginPage.module.css';
import LoginForm from './LoginForm';
import Modal from '../Modal/Modal';


function LoginPage() {
    const [visible, setVisible] = useState(false)
    const [loginInfo, setLoginInfo] = useState({
        loggedIn: false,
        email: '',
        password: '',
        rememberMe: false,
        loginError: ''
    })

    const handleVisibility = (loginData) => {
        if (loginData && validateEmail(loginData.email) && validatePassword(loginData.password)) {
            console.log("Login successful");
            setLoginInfo({
                loggedIn: true,
                email: loginData.email,
                password: loginData.password,
                rememberMe: loginData.rememberMe,
                loginHeader: 'Login successful',
                loginMessage: 'You have been logged out successfully'
            })
        } else {
            console.log("Login failed");
            setLoginInfo({
                loggedIn: false,
                email: loginData.email,
                password: loginData.password,
                rememberMe: loginData.rememberMe,
                loginHeader: 'Login failed',
                loginMessage: 'Wrong email or password'
            })
        }
        setVisible(!visible)
    }

    return (
        <>
            {ReactDOM.createPortal(<Modal visible={visible} onLogin={handleVisibility} data={loginInfo} />, document.querySelector('#modal'))}
            <main className={classes.login}>
                <div className={classes.container}>
                    <div className={classes.bgForm} />
                    <div className={classes.formContainer}>
                        <div className={classes.formWrapper}>
                            <h2>Get all stuffs done with Loggin engine.</h2>
                            <p>Access to the most powerfull tool in the entire design and web galaxy.</p>
                            <div className={classes["login-links"]}>
                                <a href="#" className={classes.active}>Login</a>
                                <a href="#">Register</a>
                            </div>
                            <LoginForm onLogin={handleVisibility} />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default LoginPage;