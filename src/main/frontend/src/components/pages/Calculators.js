import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import CalculatorsList from '../modules/calculator/CalculatorsList'
import IWCalculator from '../modules/calculator/IWCalculator'
import BMICalculator from '../modules/calculator/BMICalculator'
import NotFound from '../pages/NotFound'
import setTitle from '../modules/_functions/setTitle'

const Calculators = ({match}) => {
    const essentials = {
        title: setTitle('Calculators')
    }

    return (
        <div className="calculators-page content-page">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <CalculatorsList path={match.url}/>
                    </div>
                    <div className="col-md-8">
                        <Switch>
                            <Route path={match.url} exact component={IWCalculator}/>
                            <Route path={`${match.url}/body-mass`} component={BMICalculator} />
                            <Route path={`${match.url}/ideal-weight`} component={IWCalculator} />
                            <Route>
                                <Redirect to="/404" />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Calculators;