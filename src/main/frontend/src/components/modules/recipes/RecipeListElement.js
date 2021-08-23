const RecipeListElement = (props) => {
    const image_url = {
        backgroundImage: `url(${props.recipe.image})`
    }
    return (
        <div className="recipes-list-element">
            <div className="recipes-list-element__time"><div><span>35</span><br/><span className="small">dəq</span></div></div>
            <div className="recipes-list-element__image" style={image_url}></div>
            <h1 className="recipes-list-element__title">{props.recipe.title}</h1>
        </div>
    )
}

export default RecipeListElement