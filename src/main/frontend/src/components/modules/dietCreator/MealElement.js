import React, { useState } from 'react'
import { connect } from 'react-redux'
import FoodElements from './FoodElements'
import FoodElementForm from './FoodElementForm'
import { addFood } from '../../../actions/foodsActions'

const MealElement = (props) => {
    const mealNameDef = props.id + ". Öyün";
    const [mealName, setMealName] = useState(mealNameDef);

    const addFoodToMeal = (food) => {
        const updatedFood = {...food, mealId: props.id}
        props.dispatch(addFood(updatedFood));
    }

    const handleNameChange = (e) => {
        const value = e.target.value;
        setMealName(value);
    }
    const handleEmpty = (e) => {
        if(e.target.value == '') {
            setMealName(mealNameDef);
        }
    }

    return (
        <div className="meal-element">
            <input className="meal-element__title__input" value={mealName} onChange={handleNameChange} onBlur={handleEmpty}/>
            <small className="meal-element__subsmall">*Başlığı dəyişmək üçün üzərinə klikləyin</small>
            <hr/>
            <FoodElements mealId={props.id} foods={props.foods}/>
            <FoodElementForm mealId={props.id} onSubmit={addFoodToMeal} />
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        foods: state.foods.filter((food) => { return food.mealId == props.id } )
    }
}

export default connect(mapStateToProps)(MealElement);