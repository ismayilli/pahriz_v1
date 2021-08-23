import { useEffect, useState } from 'react'
import { recipes } from '../exampleData'
import RecipeList from '../modules/recipes/RecipeList'

const Recipes = () => {
    const [recipes,setRecipes] = useState([]);
    const [recipesLoading, setRecipesLoading] = useState(false);

    useEffect(()=> {
        setRecipesLoading(true);
        fetch("http://localhost:8080/api/recipes")
        .then(response => {
            if(response.ok) {
                return response.json();
            }
            throw response.json();
        }) 
        .then(data => {
            setRecipes(data);
        })
        .catch(error => {
            console.log("System error");
        })
        .finally(()=> {
            setRecipesLoading(false);
        })
    },[])
    return (
        <div className="recipes-page content-page">
            <div className="container">
                <RecipeList recipes={recipes}/>
            </div>
        </div>
    )
}

export default Recipes