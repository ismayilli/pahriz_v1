const RecipeContent = (props) => {
    const {recipeContent} = props;
    return (
        <div className="recipe-content">
            <img className="recipe-content__image" src={recipeContent.image} />
            <h1 className="recipe-content__title">{recipeContent.title}</h1>
            <h2>{recipeContent.id}</h2>
        </div>
    )
}

export default RecipeContent