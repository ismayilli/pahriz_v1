import {foodFetcher, categoryFetcher} from '../fetchers/browseFoodFetcher'

const browseFoodsInitialState = {
    browseFoods: [],
    categories: categoryFetcher(),
    filters: {
        currentSearch: undefined,
        category: []
    }
}

export const browseFoodsReducer = (state = browseFoodsInitialState, action) => {
    switch(action.type) {
        case 'APPLY_SEARCH':
            return {
                ...state,
                browseFoods: foodFetcher({...state.filters,currentSearch: action.currentSearch}),
                filters: {
                    ...state.filters,
                    currentSearch: action.currentSearch
                }
            }
        case 'APPLY_CATEGORY':
            return {
                ...state,
                browseFoods: foodFetcher({...state.filters,category: action.categories}),
                filters: {
                    ...state.filters,
                    category: action.categories
                }
            }
        default: 
            return state
    }
}