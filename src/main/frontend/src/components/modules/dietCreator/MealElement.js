import React from 'react'
import { connect } from 'react-redux'
import FoodElements from './FoodElements'
import FoodElementForm from './FoodElementForm'
import { addFood } from '../../../actions/foodsActions'

const MealElement = (props) => {
    const addFoodToMeal = (food) => {
        const updatedFood = {...food, mealId: props.id}
        props.dispatch(addFood(updatedFood));
    }
    return (
        <div className="meal-element">
            <h2 className="meal-element__title">{ `${props.id}. Meal` }</h2>
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