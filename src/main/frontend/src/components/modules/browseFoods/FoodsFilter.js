import { useState } from "react"

const FoodsFilter = (props) => {
    const [categoryFilter, setCategoryFilter] = useState([])
    function handleChange(e) {
        const category = parseInt(e.target.dataset.id);
        const categories = categoryFilter;
        if(e.target.checked) {
            categories.push(category);
        }
        else {
            categories.splice(categories.indexOf(category),1);
        }
        setCategoryFilter(categories);
        props.applyCategory(categoryFilter);
    }
    return (
        <div className="browse-foods-filter">
            <h2 className="browse-foods-filter__title">Filtrlər</h2>
            <div className="browse-foods-filter__categories">
                <h3 className="browse-foods-filter__categories__title">Kateqoriya ilə filtrlə</h3>
                {props.categories.map((category) => {
                    return (
                        <div className="browse-foods-filter__form" key={category.id}>
                            <input className="browse-foods-filter__input" id={category.id} data-id={category.id} type="checkbox" onChange={handleChange}/>
                            <label className="browse-foods-filter__label" htmlFor={category.id}>{category.name}</label>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default FoodsFilter