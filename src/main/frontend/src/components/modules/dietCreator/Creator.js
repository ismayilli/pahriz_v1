import React from 'react'
import MealsSelector from './MealsSelector'
import CreatorForm from './CreatorForm'

class Creator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: false,
            count: 0
        }
    }
    onSubmit = (e) => {
        e.preventDefault()
        const mealsCount = e.target.elements.mealsCount.value
        this.setState({
            selected: true,
            count: mealsCount
        })
    }
    render() {
        return (
            <div className="main-creator">
                <MealsSelector onSubmit={this.onSubmit} />
                { this.state.selected && <CreatorForm count={this.state.count} /> }
            </div>
        )
    }
}

export default Creator