import MealElement from "./MealElement";
import MainCalculator from "./MainCalculator";

const CreatorForm = (props) => {
    function listMeals() {
        let i = 1, meals = []
        const {count} = props
        while(i<=count) {
            meals.push(i);
            i++
        }
        return meals
    }
    return (
        <div className="meals-list">
            <div className="row">
                <div className="col-md-6">
                    {listMeals().map((i)=> {
                        return <MealElement key={i} id={i} />
                    })}
                </div>
                <div className="col-md-4 offset-md-2">
                    <MainCalculator />
                </div>
            </div>
        </div>
    )
}

export default CreatorForm