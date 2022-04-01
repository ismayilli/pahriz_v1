import React, { useEffect, useState } from 'react';
import FoodsList from '../modules/browseFoods/FoodsList'
import FoodsSearch from '../modules/browseFoods/FoodsSearch'
import FoodsFilter from '../modules/browseFoods/FoodsFilter'
import setTitle from '../modules/_functions/setTitle';

class Foods extends React.Component {
    constructor(props) {
        super(props);
        const essentials = {
            title: 'Browse Foods'
        }

        this.state = {
            foodsLoading: true,
            foods: [],
            filters: {
                categories: [],
                search: ''
            },
            foodCategoriesLoading: true,
            foodCategories: [],
            title: setTitle(essentials.title)
        }
        this.applyCategory = this.applyCategory.bind(this);
        this.applySearch = this.applySearch.bind(this);
    }
    componentDidMount() {
        this.fetchFoods();
        this.fetchCategories();
    };
    async fetchFoods() {
        this.setState(()=> ({
            foodsLoading: true
        }))

        let url = "/api/foods";
        let response = await fetch(url);
        let data = await response.json();

        const filteredFoods = data.filter((food) => {
            console.log(food);
            const searchFilter = (this.state.filters.search) ? food.name.toLowerCase().indexOf(this.state.filters.search) > -1 : true;
            const categoryFilter = (this.state.filters.categories !== undefined && this.state.filters.categories.length > 0) ? this.state.filters.categories.includes(food.category.id) : true;
            return searchFilter && categoryFilter;
        })
        this.setState(()=>({
            foods: filteredFoods,
            foodsLoading: false
        }))
    }
    async fetchCategories() {
        this.setState(()=> ({
            foodCategoriesLoading: true
        }))

        let url = "/api/getAllFoodCategories";
        let response = await fetch(url);
        let data = await response.json();


        this.setState(()=>({
            foodCategories: data,
            foodsCategoriesLoading: false
        }))
    }
    applySearch(searchValue) {
        this.setState(()=>({
            filters: {
                ...this.state.filters,
                search: searchValue
            }
        }))
        this.fetchFoods();
    }
    applyCategory(categoriesList) {
        this.setState(()=>({
            filters: {
                ...this.state.filters,
                categories: categoriesList
            }
        }));
        console.log(categoriesList);
        this.fetchFoods();
    }
    render() {
        return (
            <div className="browse-foods-page content-page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <FoodsSearch search={this.applySearch} />
                            {this.state.foodsLoading && <h3>Loading</h3>}
                            {!this.state.foodsLoading && <FoodsList foodsList={this.state.foods}/>}
                        </div>
                        <div className="col-md-3 offset-md-1">
                            <FoodsFilter categories={this.state.foodCategories} applyCategory={this.applyCategory}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// const mapStateToProps = (state,props) => {
//     return {
//         foods: state.browseFoods
//     }
// }

// export default connect(mapStateToProps)(Foods);

export default Foods;