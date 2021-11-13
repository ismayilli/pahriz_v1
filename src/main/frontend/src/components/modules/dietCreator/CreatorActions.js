const CreatorActions = (props) => {
    const {info} = props;
    return (
        <div>
            <div className="creator-actions-info">
                <h4 className="creator-actions-info-title">Cəmi :</h4>
                <h3 className="creator-actions-info-calorie">{info.totalCalorie} kalori</h3>
            </div>
            <hr/>
            <button className="creator-actions-print-button" onClick={props.printer}>Çap və ya PDF</button>
        </div>
    )
}

export default CreatorActions;