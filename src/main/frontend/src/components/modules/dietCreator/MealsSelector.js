import React from 'react'

class MealsSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customSelect: false,
            submitted: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    handleChange(e) {
        const selectValue = e.target.value;
        if(parseInt(selectValue) === 0) {
            e.target.disabled = true;
            this.setState(()=> ({
                customSelect: true
            }))
        }
    }
    onSubmit(e) {
        e.preventDefault();
        const mealForm = e.target.elements;
        const mealsCount = (this.state.customSelect) ? mealForm.mealsCountCustom.value : mealForm.mealsCountSelect.value;
        this.setState(()=> ({
            submitted: true
        }))
        this.props.onSubmit(mealsCount);
    }
    render() {
        return (
            <div className="meals-selector">
                <form onSubmit={this.onSubmit}>
                    <select defaultValue="3" className="meals-selector__select"  onChange={this.handleChange} name="mealsCountSelect">
                        <option value="2">2 Öyün</option>
                        <option value="3">3 Öyün</option>
                        <option value="5">5 Öyün</option>
                        <option value="0">Özün Seç</option>
                    </select>
                    {this.state.customSelect && <input className="meals-selector__custom" type="number" placeholder="Günlük öyün sayını yazın" name="mealsCountCustom"/>}
                    <button className="action-button">{!this.state.submitted ? 'Yarat' : 'Yenidən Yarat'}</button>
                </form>
            </div>
        )
    }
}

export default MealsSelector