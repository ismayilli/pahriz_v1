import React from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

class UserModal extends React.Component {
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.state = {
            authType: this.props.authType
        }
    }
    handleClose() {
        this.props.setAuthType(0);
    }
    handleLogin() {
        this.setState(()=> ({
            authType: 1
        }));
    }
    handleRegister() {
        this.setState(()=> ({
            authType: 2
        }));
    }
    render() {
        return (
            <div className="auth-modal-wrapper">
                <div onClick={this.handleClose} className="auth-modal-back"></div>
                <div className="auth-modal">
                    <div className="auth-modal__show">
                        <h3 style={{fontSize: '60px'}}>pahriz</h3>
                    </div>
                    <div className="auth-modal__form-wrapper">
                        <div className="auth-modal-form">
                            <span className="auth-modal-form__close" onClick={this.handleClose}>x</span>
                            {this.state.authType == 1 && <LoginForm setRegister={this.handleRegister} />}
                            {this.state.authType == 2 && <RegisterForm setLogin={this.handleLogin} />}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserModal;