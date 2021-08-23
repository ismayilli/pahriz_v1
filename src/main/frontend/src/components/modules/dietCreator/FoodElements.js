import FoodElement from './FoodElement'

const FoodElements = (props) => {
    return (
        <div className="food-elements">
            {props.foods.map((food) => {
                return <FoodElement key={food.foodName} info={food} />
            })}
        </div>
    )
}

export default FoodElements