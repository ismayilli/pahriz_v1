import MealElement from "./MealElement";
import CreatorActions from "./CreatorActions";
import { useRef, useState } from "react";
import {store} from '../../../store/configStore';
import { useReactToPrint } from "react-to-print";

const CreatorForm = (props) => {
    const [calcInfo, setCalcInfo] = useState({totalCalorie: 0});
    const printRef = useRef();

    function listMeals() {
        let i = 1, meals = []
        const {count} = props
        while(i<=count) {
            meals.push(i);
            i++
        }
        return meals
    }

    store.subscribe(()=>{
        const foods = store.getState().foods;
        let total = 0;

        foods.map((food)=> {
            if(food.calorie !== undefined) {
                total += parseInt(food.calorie);
            }
        })

        if(total !== undefined) {
            setCalcInfo({
                totalCalorie: total
            })
        }
    })

    const print = useReactToPrint({
        content : () => printRef.current
    })

    return (
        <div ref={printRef} className="meals-list">
            <div className="row">
                <div className="col-md-6">
                    {listMeals().map((i)=> {
                        return <MealElement key={i} id={i} />
                    })}
                </div>
                <div className="col-md-4 offset-md-2">
                    <CreatorActions printer={print} info={calcInfo}/>
                </div>
            </div>
        </div>
    )
}

export default CreatorForm