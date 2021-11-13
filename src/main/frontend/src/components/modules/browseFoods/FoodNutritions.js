const FoodNutritions = (props) => {
    const {nutritions} = props;
    return (
        <div className="food-page-nutritions">
            <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th colSpan="2">Qida dəyərləri (100 q)</th>
                    </tr>
                </thead>
                <tbody>
                {(Array.isArray(nutritions) && nutritions.length) ? nutritions.map((item,index)=>{
                    return (
                        <tr key={index}>
                            <th>{item.name}</th>
                            <td>{item.value} q</td>
                        </tr>
                        )
                }) : (
                    <tr className="food-page-nutritions__noData">
                        <td colSpan="2">NO DATA</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    )
}

export default FoodNutritions;