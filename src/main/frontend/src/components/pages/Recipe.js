import React from 'react'
import RecipeContent from '../modules/recipes/RecipeContent'
import NotFound from '../pages/NotFound'
import setTitle from '../modules/_functions/setTitle'

class Recipe extends React.Component {
    constructor(props) {
        super(props)
        const essentials = {
            title: 'Pahriz.com'
        }

        this.state = {
            recipeContent: {},
            recipeExists: true,
            recipeId: this.props.match.params.id,
            title: setTitle(essentials.title)
        }
    }
    componentDidMount() {
        const recipeContent = this.fetchRecipe(this.state.recipeId)
        if(recipeContent == null) {
            this.setState({recipeExists: true})
            this.props.history.push('/404')
        }
        else this.setState({recipeContent})
    }
    async fetchRecipe() {
        let url = "/api/recipe/"+this.state.recipeId;
        let response = await fetch(url);
        let data = await response.json();

        this.setState(() => ({
            recipeContent: data,
            title: setTitle(data.title)
        }))
    }
    render() {
        return (
            <div className="recipe-page content-page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <RecipeContent recipeContent={this.state.recipeContent} />
                        </div>
                        <div className="col-md-3">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Recipe