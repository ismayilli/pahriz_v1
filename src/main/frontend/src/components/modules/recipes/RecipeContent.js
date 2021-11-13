import parse from 'html-react-parser';

const RecipeContent = (props) => {
    const {recipeContent} = props;
    const text = parse(''+recipeContent.content+'');

    return (
        <div className="recipe-content">
            <div className="recipe-content__header">
                <span className="recipe-content__header__category">{recipeContent.category ? recipeContent.category.name : ''}</span>
            </div>
            <h1 className="recipe-content__title">{recipeContent.title}</h1>
            <div className="recipe-content__image">
                <img className="recipe-content__image__itself" src={recipeContent.image} />
            </div>
            <div className="recipe-content__duration__parent">
                <div className="recipe-content__duration">
                    <i className="far fa-clock"></i> 
                    <h4><small>Hazırlanma vaxtı</small> <br/><strong>{recipeContent.duration} dəq.</strong></h4>
                </div>
            </div>
            <div className="recipe-content__text">
                {text}
            </div>
        </div>
    )
}

export default RecipeContent