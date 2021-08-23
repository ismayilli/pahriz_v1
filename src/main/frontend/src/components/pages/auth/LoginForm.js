import React from 'react';

const LoginForm = (props) => {
    function setRegister() {
        props.setRegister();
    }
    return (
        <div className="login-register-form login-form">
            <h3 className="login-register-form__title">Giriş et</h3>
            <form>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" />
                </div>
                <div className="form-group">
                    <label>Parol</label>
                    <input type="password" />
                </div>
                <button className="login-register-form__submit">Giriş</button>
                <a onClick={setRegister}>Hesabınız yoxdur?</a>
                <hr />
                <a className="social-login-register-button social-user-fb-button">Facebook ilə daxil ol</a>
                <a className="social-login-register-button social-user-google-button">Google ilə daxil ol</a>
            </form>
        </div>
    )
}

export default LoginForm;