import { useState, useEffect } from "react";

const ArticlesFilter = (props) => {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

        props.search(search);
        props.category(category);
        props.fetch();
    }
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    }
    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    }
    return (
        <div className="articles-filter">
            <form onSubmit={handleSubmit} className="articles-filter__form">
                <input placeholder="Axtaris ucun soz yazin" onChange={handleSearchChange} className="articles-filter__search__input"/>
                <select onChange={handleCategoryChange} className="articles-filter__category__select">
                    <option value={1}>Butun kateqoriyalar</option>
                    <option value={2}>Saglamliq</option>
                    <option value={3}>Heyat</option>
                </select>
                <button className="articles-filter__button">search</button>
            </form>
        </div>
    )
}

export default ArticlesFilter;