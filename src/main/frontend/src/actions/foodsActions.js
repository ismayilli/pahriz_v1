export const addFood = ({mealId = 0, foodName = '', serveAmount = 0, amountType = undefined, calorie = undefined}) => ({
    type: 'ADD_FOOD',
    food: {
        mealId, foodName, serveAmount, amountType, calorie
    }
})

export const removeFood = (id) => ({
    type: 'REMOVE_FOOD',
    id
})