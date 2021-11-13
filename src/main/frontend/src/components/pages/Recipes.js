import React from 'react';
import { recipes } from '../exampleData'
import RecipeList from '../modules/recipes/RecipeList'
import RecipesFilter from '../modules/recipes/RecipesFilter';
import setTitle from '../modules/_functions/setTitle';

class Recipes extends React.Component  {
    constructor(props) {
        super(props)
        const essentials = {
            title: 'Recipes'
        }

        this.state = {
            recipesLoading: true,
            recipes: [],
            search: "",
            category: 0,
            recipesCategoriesLoading: true,
            recipeCategories: [],
            title: setTitle(essentials.title)
        }

        this.applySearch = this.applySearch.bind(this);
        this.applyCategory = this.applyCategory.bind(this);
        this.fetchRecipes = this.fetchRecipes.bind(this);
    }
    componentDidMount() {
        this.fetchRecipes();
        this.fetchRecipeCategories();
    }

    async fetchRecipes() {
        this.setState(() => ({
            recipesLoading: true
        }))

        let url = "http://localhost:8080/api/recipes";
        let response = await fetch(url);
        let data = await response.json();

        const filteredRecipes = data.filter((recipe)=> {
            const searchFilter = (this.state.search) ? (recipe.title.toLowerCase().indexOf(this.state.search) > -1) : true;
            const categoryFilter = (this.state.category != 0) ? (recipe.category.id == this.state.category) : true;
            return searchFilter && categoryFilter;
        })

        this.setState(() => ({
            recipes: filteredRecipes,
            recipesLoading: false
        }))

    }
    async fetchRecipeCategories() {
        this.setState(() => ({
            recipesCategoriesLoading: true
        }))

        let url = "http://localhost:8080/api/getAllRecipeCategories";
        let response = await fetch(url);
        let data = await response.json();

        console.log(data);

        this.setState(() => ({
            recipeCategories: data,
            recipesCategoriesLoading: false
        }))

    }
    applySearch(search) {
        this.setState(()=>({
            search
        }))
    }
    applyCategory(category) {
        this.setState(()=>({
            category
        }))
    }
    render() {
        return (
            <div className="recipes-page content-page">
                <div className="container">
                    <RecipesFilter categories={this.state.recipeCategories} search={this.applySearch} category={this.applyCategory} fetch={this.fetchRecipes} />
                    <RecipeList recipes={this.state.recipes}/>
                </div>
            </div>
        )
    }
}

export default Recipes