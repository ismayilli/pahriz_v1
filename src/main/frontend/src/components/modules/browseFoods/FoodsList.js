import React from 'react';
import FoodsListElement from './FoodsListElement'

const FoodsList = (props) => {
    //console.log(props.foodsList);
    return (
        <div className="browse-foods-list">
            {props.foodsList.map((food) => {
                return <FoodsListElement key={food.id} food={food} />
            })}
        </div>
    )
}

export default FoodsList