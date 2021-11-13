const foodsInitialState = [
    {}
]

export const foodsReducer = (state = foodsInitialState, action) => {
    switch(action.type) {
        case 'ADD_FOOD':
            return [
                ...state,
                action.food
            ]
        case 'UPDATE_FOOD':
            const updateIndex = state.findIndex((food)=> food.id == action.id);
            const updatedFoods = [...state];
            if(updateIndex !== -1) {
                updatedFoods[updateIndex].calorie = action.calorie;
            }
            //console.log(updatedFoods);
            return [
                ...updatedFoods
            ]
        case 'REMOVE_FOOD':
            const removeIndex = state.findIndex((food)=> food.id == action.id);
            const removedFoods = [...state];
            if(removeIndex !== -1) {
                removedFoods.splice(removeIndex,1);
            }
            //console.log(updatedFoods);
            return [
                ...removedFoods
            ]
        default:
            return state
    }
}