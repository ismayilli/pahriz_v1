import React, { useEffect, useState } from 'react';
import FoodContent from '../modules/browseFoods/FoodContent';
import FoodNutritions from '../modules/browseFoods/FoodNutritions';
import setTitle from '../modules/_functions/setTitle';

class Food extends React.Component {
    constructor(props) {
        super(props);
        const essentials = {
            title: 'Pahriz.com'
        }
        this.state = {
            food: {nutritions:[{}],serves:[{}]},
            foodLoading: false,
            foodId: props.match.params.id,
            title: setTitle(essentials.title)
        }
    }

    componentDidMount() {
        this.fetchFood();
    }

    async fetchFood() {
        this.setState(()=> ({
            foodLoading: true
        }))

        let url = "/api/food/"+this.state.foodId;
        let response = await fetch(url);
        let data = await response.json();

        this.setState(()=>({
            food: data,
            foodLoading: false,
            title: setTitle(data.name)
        }))
    }
    
    render() {
        return (
        <div className="food-page content-page">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <FoodContent food={this.state.food}/>
                    </div>
                    <div className="col-md-4">
                        <FoodNutritions nutritions={this.state.food.nutritions} />
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Food;