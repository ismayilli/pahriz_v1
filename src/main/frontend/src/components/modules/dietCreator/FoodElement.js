import FoodListElement from '../browseFoods/FoodsListElement';
import foodDefault from '../../../assets/images/food-default.png';

const FoodElement = (props) => {
    const foodData = {
        image: foodDefault,
        name: props.info.foodName,
        amount: props.info.serveAmount,
        portion: props.info.amountType,
        unit: props.info.calorie/props.info.serveAmount,
        values: [{id:1,name: props.info.amountType,value: 1}],
        fromCreator: true
    }
    return (
        <div className="creator-food-element">
            <FoodListElement food={foodData} />
        </div>
    )
}

export default FoodElement