import {Link} from 'react-router-dom';

const CalculatorsList = (props) => {
    return (
        <div className="calculators-navigation">
        <h3 className="calculators-navigation__title">Kalkulyatorlar</h3>
            <ul>
                <li>
                    <Link to={`${props.path}/ideal-weight`}>İdeal Çəki</Link>
                </li>
                <li>
                    <Link to={`${props.path}/body-mass`}>Bədən Kütlə İndeksi</Link>
                </li>
            </ul>
        </div>
    )
}

export default CalculatorsList