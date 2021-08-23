const FoodsSearch = (props) => {
    function onSubmit(e) {
        e.preventDefault()
    }
    const handleSearchChange = (e) => {
        const foodSearch = e.target.value;
        props.search(foodSearch)
    }
    return (
        <div className="browse-foods-search">
            <form className="browse-foods-search__form" onSubmit={onSubmit}>
                <input placeholder="Pomidor..." className="browse-foods-search__input" type="text" name="foods-search-input" onChange={handleSearchChange} />
                <button className="browse-foods-search__button">Axtar</button>
            </form>
        </div>
    )
}

export default FoodsSearch