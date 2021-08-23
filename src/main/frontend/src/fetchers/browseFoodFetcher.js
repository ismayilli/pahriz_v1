import {foodsData} from '../components/exampleData'
import {foodsCategories} from '../components/exampleData'

export const foodFetcher = (foods, filters) => {

    const filteredFoods = foods.filter((food) => {
        const searchFilter = (filters.currentSearch) ? food.name.toLowerCase().indexOf(filters.currentSearch) > -1 : true;
        const categoryFilter = (filters.category !== undefined && filters.category.length > 0) ? filters.category.includes(food.category_id) : true;
        return searchFilter && categoryFilter;
    })
    //console.log(filteredFoods);
    return filteredFoods;
}

export const categoryFetcher = () => {
    const categories = foodsCategories;
    return foodsCategories;
}