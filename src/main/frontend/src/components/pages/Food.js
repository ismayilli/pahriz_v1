import { useEffect, useState } from 'react';
import FoodContent from '../modules/browseFoods/FoodContent';

const Food = (props) => {
    const [food,setFood] = useState({});
    const [foodLoading, setFoodLoading] = useState(false);
    const foodId = props.match.params.id;

    useEffect(()=> {
        setFoodLoading(true);
        fetch("http://localhost:8080/api/food/"+foodId)
        .then(response => {
            if(response.ok) {
                return response.json();
            }
            throw response.json();
        }) 
        .then(data => {
            setFood(data);
        })
        .catch(error => {
            console.log("System error");
        })
        .finally(()=> {
            setFoodLoading(false);
        })
    })

    return (
        <div className="food-page content-page">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <FoodContent food={food} />
                    </div>
                    <div className="col-md-4">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Food;