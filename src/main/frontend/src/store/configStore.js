import { createStore, combineReducers } from 'redux'
import { foodsReducer } from '../reducers/foodsReducer'
import { mealsReducer } from '../reducers/mealsReducer'
import { browseFoodsReducer } from '../reducers/browseFoodsReducer'

export const store = createStore(
    combineReducers({
        foods: foodsReducer,
        meals: mealsReducer,
        browseFoods: browseFoodsReducer
    })
)
