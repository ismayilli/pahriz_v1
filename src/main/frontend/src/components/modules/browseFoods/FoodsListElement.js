import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const FoodListElement = (props) => {
    const [calorie, setCalorie] = useState(props.food.unit);
    const [portion, setPortion] = useState(0);
    const [amount, setAmount] = useState((props.food.amount == undefined) ? 1 : props.food.amount);
    const examplePortions = [{id:1,name: "ədəd",value: 10},{id:2,name: "qram",value: 1},{id:3,name: "porsiya",value: 20}];
    const [values, setValues] = useState((!props.food.fromCreator) ? examplePortions : props.food.values);
    useEffect(() => {
        setMainCalorie();
    })
    const setMainCalorie = () => {
        setCalorie(Math.round(props.food.unit*parseInt(values[portion].value)*amount));
    }
    const handleAmountChange = (e) => {
        const selectedAmount = e.target.value;
        setAmount(selectedAmount);
        setMainCalorie();
    }
    const handlePortionChange = (e) => {
        const selectedPortion = e.target.value;
        setPortion(selectedPortion);
        setMainCalorie();
    }
    return (
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
                                    <option key={key.id} value={index} >{key.name}</option>
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
    )
}

export default FoodListElement;