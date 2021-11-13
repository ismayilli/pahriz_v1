import RecipeListElement from '../recipes/RecipeListElement'
import { Link } from 'react-router-dom'

const RecipeList = (props) => {
    return (
        <div className="recipes-page-list">
            <div className="row">
                {props.recipes.map((recipe) => {
                    return (
                        <div key={recipe.id} className="col-md-4">
                            <Link to={`/recipe/${recipe.id}`}><RecipeListElement key={recipe.id} recipe={recipe} /></Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default RecipeList