import {Link} from 'react-router-dom';

const Footer = () => {
    const essentials = {
        logo_url: "https://pahrizcdn.s3.eu-central-1.amazonaws.com/assets/pahriz_logo.png"
    }

    return (
        <div className="page-footer">
            <div className="container">
                <div className="row page-footer__first-row">
                    <div className="col-md-6">
                        <div className="page-footer__brand">
                            <h2 ><img className="page-footer__brand__logo" src={essentials.logo_url} /></h2>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h4 className="page-footer__nav-title">Vasitələr</h4>
                        <ul className="page-footer__nav">
                            <li>
                                <Link to="/">Diyeta Generator</Link>
                            </li>
                            <li>
                                <Link to="/articles">Bloq</Link>
                            </li>
                            <li>
                                <Link to="/recipes">Yemək reseptləri</Link>
                            </li>
                            <li>
                                <Link to="/calculators">Kalkulyatorlar</Link>
                            </li>
                            <li>
                                <Link to="/foods">Kalorilər</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h4 className="page-footer__nav-title">İstifadəçi</h4>
                        <ul className="page-footer__nav">
                            <li>
                                <Link to="#login">Giriş</Link>
                            </li>
                            <li>
                                <Link to="#register">Qeydiyyat</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row page-footer__second-row">
                    <div className="col-md-6">
                        <div className="page-footer__sub-left">
                            <span>© 2021 Pahriz Technology</span>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="page-footer__sub-right">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer