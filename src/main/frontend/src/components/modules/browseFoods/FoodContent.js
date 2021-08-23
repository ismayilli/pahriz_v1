const FoodContent = (props) => {
    const {food} = props;
    return (
        <div className="food-page">
            <div className="food-page__header">
                <div className="food-page__header__image">
                    <img src={food.image} />
                </div>
                <h1 className="food-page__header__title">{food.name}</h1>
            </div>
            <div className="food-page__calorie">

            </div>
            <div className="food-page__info">
            
            </div>
        </div>
    )
}

export default FoodContent;