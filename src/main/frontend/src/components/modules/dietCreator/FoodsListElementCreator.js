import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { updateFood, removeFood } from '../../../actions/foodsActions';
import {connect} from 'react-redux';


const FoodListElementCreator = (props) => {
    const servesPlaceholder = [{name:'qram',value: 1}]

    const [calorie, setCalorie] = useState(props.food.unit);
    const [portion, setPortion] = useState(0);
    const [amount, setAmount] = useState((props.food.amount == undefined) ? 1 : props.food.amount);
    const [values, setValues] = useState((!props.food.fromCreator) ? (props.food.serves[0].name ? props.food.serves : servesPlaceholder) : props.food.values);
    
    useEffect(() => {
        setMainCalorie();
    },[portion,amount])

    useEffect(()=> {
        props.dispatch(updateFood(props.food.id, calorie));
    },[calorie])

    const removeFoodFrom = () => {
        props.dispatch(removeFood(props.food.id));
        props.remove();
    }

    const setMainCalorie = () => {
        const newCalorie = Math.round(props.food.unit*parseInt(values[portion].value)*amount);
        setCalorie(newCalorie);
    }
    const handleAmountChange = (e) => {
        const selectedAmount = e.target.value;
        setAmount(selectedAmount);
    }
    const handlePortionChange = (e) => {
        const selectedPortion = e.target.value;
        setPortion(selectedPortion);
    }
    return (
        <div className="list-element-creator-parent">
            <div className="browse-foods-list-element">
                <div className="display-flex">
                    <Link to="/">
                        <div className="browse-foods-list-element__image">
                            <img src={props.food.image} />
                        </div>
                    </Link>
                    <div>
                        <Link to={`/food/${props.food.id}`}><h3 className="browse-foods-list-element__title">{props.food.name}</h3></Link>
                        <div className="browse-foods-list-element__serveSelector">
                            <input value={amount} onChange={handleAmountChange} />
                            <select onChange={handlePortionChange}>
                                {values.map((key,index) => {
                                    return (
                                        <option key={key.name} value={index} >{key.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="browse-foods-list-element__calorie">
                        <span className="valueC">{calorie}</span>
                        <br/>
                        <span className="descr">kalori</span>
                    </p>
                </div>
            </div>
            <div onClick={removeFoodFrom} className="list-element-remover">
                <span><i className="fas fa-trash-alt"></i></span>
            </div>
        </div>
    )
}

export default connect()(FoodListElementCreator);