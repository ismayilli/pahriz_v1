const RecipeListElement = (props) => {
    const image_url = {
        backgroundImage: `url(${props.recipe.image})`
    }
    return (
        <div className="recipes-list-element">
            <div className="recipes-list-element__time"><div><span>{props.recipe.duration}</span><br/><span className="small">dəq</span></div></div>
            <div className="recipes-list-element__image" style={image_url}></div>
            <h4 className="recipes-list-element__title">{props.recipe.title}</h4>
        </div>
    )
}

export default RecipeListElement