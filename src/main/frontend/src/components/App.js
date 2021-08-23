import { Provider } from 'react-redux'
import { store } from '../store/configStore'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import Header from './pages/Header'
import Footer from './pages/Footer'
import Home from './pages/Home'
import Foods from './pages/Foods'
import Articles from './pages/Articles'
import Article from './pages/Article'
import Recipes from './pages/Recipes'
import Recipe from "./pages/Recipe";
import Calculators from './pages/Calculators';
import NotFound from './pages/NotFound'
import Author from './pages/Author';
import Food from './pages/Food'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header/>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/calculators" component={Calculators} />
          <Route path="/foods" component={Foods} />
          <Route path="/food/:id" component={Food} />
          <Route path="/articles" component={Articles} />
          <Route path="/article/:id" component={Article} />
          <Route path="/recipes" component={Recipes} />
          <Route path="/recipe/:id" component={Recipe} />
          <Route path="/author/:id" component={Author} />
          <Route>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
