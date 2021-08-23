const foodsInitialState = [
    {foodName:"isa", serveAmount: 200, amountType: "gram"}
]

export const foodsReducer = (state = foodsInitialState, action) => {
    switch(action.type) {
        case 'ADD_FOOD':
            return [
                ...state,
                action.food
            ]
        case 'REMOVE_FOOD':
            return state
        default:
            return state
    }
}