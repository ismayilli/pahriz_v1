import { Link } from 'react-router-dom'

const AuthorNavigation = (props) => {
    return (
        <div>
            <Link to={`${props.path}/articles`}>Articles</Link>
            <Link to={`${props.path}/recipes`}>Recipes</Link>
            <Link to={`${props.path}/about`}>About</Link>
        </div>
    )
}

export default AuthorNavigation;