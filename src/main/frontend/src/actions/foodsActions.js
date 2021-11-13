import { v4 as uuidv4 } from 'uuid';

export const addFood = ({id = uuidv4(), mealId = 0, foodName = '', serveAmount = 0, amountType = undefined, amountValue = 1, calorie = undefined, image = ''}) => ({
    type: 'ADD_FOOD',
    food: {
        id, mealId, foodName, serveAmount, amountType, amountValue, calorie, image
    }
})

export const updateFood = (id, calorie) => ({
    type: 'UPDATE_FOOD',
    id,calorie
})

export const removeFood = (id) => ({
    type: 'REMOVE_FOOD',
    id
})