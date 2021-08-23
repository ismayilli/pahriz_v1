import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserModal from './auth/UserModal';

const Header = () => {
    const [authType, setAuthType] = useState(0);

    return (
        <div className = "page-header-parent">
            {authType != 0 && <UserModal authType={authType} setAuthType={setAuthType} />}
            <div className="page-header container">
                <div className="header-left">
                    <div className="header-logo">
                        <h1>pahriz</h1>
                    </div>
                    <div className="header-navigation">
                        <nav>
                            <ul>
                                <li>
                                    <Link to='/'>Diyeta Generator</Link>
                                </li>
                                <li>
                                    <Link to='/calculators'>Kalkulyatorlar</Link>
                                </li>
                                <li>
                                    <Link to='/foods'>Kalorilər</Link>
                                </li>
                                <li>
                                    <Link to='/articles'>Yazılar</Link>
                                </li>
                                <li>
                                    <Link to='/recipes'>Reseptlər</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="header-right">
                    <div className="header-auth">
                        <div className="header-auth__buttons">
                            <a href="#login" className="login-button" onClick={()=>{setAuthType(1)}}>Giriş</a>
                            <a href="#register" className="register-button" onClick={()=>{setAuthType(2)}}>Qeydiyyat</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header