import React from 'react';

const RegisterForm = (props) => {
    function setLogin() {
        props.setLogin();
    }
    return (
        <div className="login-register-form register-form">
            <h3 className="login-register-form__title">Qeydiyyatdan keç</h3>
            <form>
                <div className="form-group">
                    <label>Ad</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" />
                </div>
                <div className="form-group">
                    <label>Parol</label>
                    <input type="password" />
                </div>
                <button className="login-register-form__submit">Qeydiyyat</button>
                <a onClick={setLogin}>Hesabınız var?</a>
                <hr />
                <a className="social-login-register-button social-user-fb-button">Facebook ilə qeydiyyatdan keç</a>
                <a className="social-login-register-button social-user-google-button">Google ilə qeydiyyatdan keç</a>
            </form>
        </div>
    )
}

export default RegisterForm;