import { useRef } from 'react';
import classes from './LoginForm.module.css';

function LoginForm(props) {
    const refEmail = useRef("");
    const refPassword = useRef("");
    const refCheckbox = useRef(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const loginData = {
            email: refEmail.current.value,
            password: refPassword.current.value,
            rememberMe: refCheckbox.current.checked
        };
        
        props.onLogin(loginData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input ref={refEmail} className={classes["form-control"]} type="email" name="email" placeholder="E-mail Address" />
            <input ref={refPassword} className={classes["form-control"]} type="password" name="password" placeholder="Password" />
            <div className={classes.remember}>
                <input  ref={refCheckbox} type="checkbox" id="check1" />
                <label htmlFor="check1">Remember me</label>
            </div>
            <div className={classes["form-button"]}>
                <button type="submit">Login</button>
                <a href="#">Forget password?</a>
            </div>
        </form>
    );
}

export default LoginForm;