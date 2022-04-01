import React from 'react'

class FoodElementForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            foodDB: '',
            foodsSuggestions: [],
            foodsLoading: false,
            foodName: '',
            serveAmount: 1,
            amountType: undefined,
            calorie: undefined,
            custom: false
        }
        this.handleAddingFood = this.handleAddingFood.bind(this);
        this.fetchFoodsByName = this.fetchFoodsByName.bind(this);
    }
    onFoodNameChange = (e) => {
        const foodName = e.target.value
        this.setState({foodName})
    }
    onServeAmountChange = (e) => {
        const serveAmount = e.target.value
        this.setState({serveAmount})
    }
    onCalorieChange = (e) => {
        const calorie = e.target.value
        this.setState({calorie})
    }
    customAdd = (e) => {
        this.setState(()=> ({
            custom: true
        }))
    }
    databaseAdd = (e) => {
        this.setState(()=> ({
            custom: false
        }))
    }
    handleFindingFood = (e) =>  {
        let value = e.target.value;
        this.setState(()=> ({
            foodDB: value
        }))
        if(value.trim().length > 2) {
            this.setState(()=> ({
                foodsLoading: true,
            }))
            this.fetchFoodsByName(value);
        }
        else {
            this.setState(()=> ({
                foodsSuggestions: []
            }))
        }
    }
    async fetchFoodsByName(name) {
        let url = "/api/foods/"+name;
        let response = await fetch(url);
        let data = await response.json();

        this.setState(()=>({
            foodsSuggestions: data
        }))

        //console.log(this.state.foodsSuggestions);
    }
    handleAddingFood = (e) => {
        e.preventDefault()
        const selectValue = e.target.elements.amountType.value

        this.props.onSubmit({
            mealId: this.props.mealId,
            foodName: this.state.foodName,
            serveAmount: this.state.serveAmount,
            amountType: selectValue,
            amountValue: this.state.calorie/this.state.serveAmount,
            calorie: this.state.calorie
        })

        e.target.reset();
        this.setState(()=>({
            custom: false
        }))
    }
    handleAddingFoodFromDB = (e) => {
        const food = this.state.foodsSuggestions.find((item)=>{
            return item.id == e.target.dataset.id;
        })

        this.props.onSubmit({
            mealId: this.props.mealId,
            foodName: food.name,
            serveAmount: 1,
            amountType: food.serves[0].name,
            amountValue: food.serves[0].value,
            calorie: food.unit * food.serves[0].value,
            image: food.image
        })

        this.setState(()=>({
            foodDB: '',
            foodsSuggestions: []
        }))
    }
    render() {
        return (
            <div className="creator-food-element-form">
                {!this.state.custom && (
                    <div className="creator-food-element-form__default">
                        <input value={this.state.foodDB} onChange={this.handleFindingFood} type="text" className="creator-food-element-form__default__input" placeholder="Yeməyin adını yazın" />
                        {this.state.foodsSuggestions.length > 0 && 
                            <div className="foods-suggestions-box">
                                <ul>
                                {this.state.foodsSuggestions.map((food)=>{
                                    return (
                                        <li key={food.id}><a data-id={food.id} onClick={this.handleAddingFoodFromDB}>{food.name}</a></li>
                                    )
                                })}
                                </ul>
                            </div>
                        }
                        <a className="creator-food-element-form__default__button" onClick={this.customAdd}>+ Özün əlavə et</a>
                    </div>
                )}
                {this.state.custom && (
                    <div className="creator-food-element-form__custom">
                        <form onSubmit={this.handleAddingFood}>
                            <input placeholder="Yemək adı" className="creator-food-name" type="text" name="foodName" onChange={this.onFoodNameChange} />
                            <div className="creator-food-element__details">
                                <div className="creator-food-element__amount-selector">
                                    <input  placeholder="Miqdar" className="creator-food-amount" type="number" name="serveAmount" onChange={this.onServeAmountChange} />
                                    <select className="creator-food-amount-type" name="amountType">
                                        <option value="serve">serve</option>
                                        <option value="gram">gram</option>
                                    </select>
                                </div>
                                <div className="creator-food-element__symbol">=</div>
                                <input className="creator-food-calorie" type="number" name="foodCalorie" placeholder="Kalori" onChange={this.onCalorieChange} />
                            </div>
                            <button className="creator-add-food-button">Əlavə et</button>
                            <a className="creator-food-element-form__cancel" onClick={this.databaseAdd}>Ləğv et</a>
                        </form>
                    </div>
                )}
            </div>
        )
    }
}

export default FoodElementForm