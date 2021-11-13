import FoodListElementCreator from './FoodsListElementCreator';
import foodDefault from '../../../assets/images/food-default.png';
import { useState } from 'react';

const FoodElement = (props) => {
    const [show, setShow] = useState(true);
    const removeFood = () => {
        setShow(false);
    }

    const foodData = {
        id: props.info.id,
        image: (props.info.image ? props.info.image : foodDefault),
        name: props.info.foodName,
        amount: props.info.serveAmount,
        portion: props.info.amountType,
        unit: props.info.amountValue,
        values: [{id:1,name: props.info.amountType,value: 1}],
        fromCreator: true
    }
    return (
        <div>
            {show && <div className="creator-food-element">
                <FoodListElementCreator remove={removeFood} food={foodData} />
            </div>}
        </div>
    )
}

export default FoodElement