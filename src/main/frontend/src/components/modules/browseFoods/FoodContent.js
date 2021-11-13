import parse from 'html-react-parser';
import { useEffect, useState } from 'react';

const FoodContent = (props) => {
    const {food} = props;
    const text = parse(''+food.content+'');
    const servesPlaceholder = [{name: "qram",value: 1}];
    console.log(food.unit);

    const [calorie, setCalorie] = useState(food.unit);
    const [portion, setPortion] = useState(0);
    const [amount, setAmount] = useState((food.amount == undefined) ? 1 : food.amount);
    const [portionName, setPortionName] = useState(food.serves[0].name ? food.serves[0].name : servesPlaceholder[0].name);

    useEffect(() => {
        setMainCalorie();
    })

    const setMainCalorie = () => {
        setCalorie(Math.round(food.unit*parseInt(food.serves[portion].value ? food.serves[portion].value : servesPlaceholder[0].value)*amount));
    }
    const handleAmountChange = (e) => {
        const selectedAmount = e.target.value;
        setAmount(selectedAmount);
        setMainCalorie();
    }
    const handlePortionChange = (e) => {
        const selectedPortion = e.target.value;
        console.log();
        setPortion(selectedPortion);
        setPortionName(e.target.options[e.target.options.selectedIndex].text);
        setMainCalorie();
    }
    return (
        <div className="food-page-content">
            <div className="food-page__header">
                <div className="food-page__header__image">
                    <img src={food.image} />
                </div>
                <h1 className="food-page__header__title">{food.name}</h1>
            </div>
            <hr/>
            <div className="food-page__calorie">
                <h3 className="food-page__calorie__title">Dəyərlər</h3>
                <div className="food-page__serveSelector">
                    <input className="food-page__serveSelector__amount" value={amount} onChange={handleAmountChange} />
                    <select className="food-page__serveSelector__serve" onChange={handlePortionChange}>
                        {food.serves[0].name ? food.serves.map((key,index) => {
                            return (
                                <option key={index} value={index} >{key.name}</option>
                                )
                            }) : servesPlaceholder.map((key,index) => {
                            return (
                                <option key={index} value={index} >{key.name}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="food-page__calorie__display">
                     <h4 className="food-page__calorie__display__value">{calorie} kalori</h4>
                     <span>( {amount+ " " +portionName} )</span>
                </div>
            </div>
            <div className="food-page__info">
                {text}
            </div>
        </div>
    )
}

export default FoodContent;