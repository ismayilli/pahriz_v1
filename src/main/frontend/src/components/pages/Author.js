import AuthorNavigation from '../modules/author/AuthorNavigation'
import AuthorArticles from '../modules/author/AuthorArticles'
import AuthorRecipes from '../modules/author/AuthorRecipes'
import AuthorAbout from '../modules/author/AuthorAbout'
import AuthorHeader from '../modules/author/AuthorHeader'
import { Route, Switch } from 'react-router-dom';

const Author = ({match}) => {
    return (
        <div>
            <AuthorHeader />
            <AuthorNavigation path={match.url}/>
            <Switch>
                <Route path={`${match.url}`} exact component={AuthorArticles}/>
                <Route path={`${match.url}/articles`} component={AuthorArticles} />
                <Route path={`${match.url}/recipes`} component={AuthorRecipes} />
                <Route path={`${match.url}/about`} component={AuthorAbout} />
            </Switch>
        </div>
    )

}

export default Author;