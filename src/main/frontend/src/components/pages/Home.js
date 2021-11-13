import React from 'react'
import MealsSelector from '../modules/dietCreator/MealsSelector'
import CreatorForm from '../modules/dietCreator/CreatorForm'
import workout from '../../assets/images/workout.png';
import setTitle from '../modules/_functions/setTitle';

class Home extends React.Component {
    constructor(props) {
        super(props)
        const essentials = {
            title: 'Pahriz.com'
        }

        this.state = {
            selected: false,
            count: 0,
            title: setTitle(essentials.title)
        }
    }
    onSubmit = (mealsCount) => {
        this.setState({
            selected: true,
            count: mealsCount
        })
        setTimeout(()=> {
            const element = document.getElementById("creator-part");
            element.scrollIntoView({behavior: 'smooth',block: 'start'});
        });
    }
    render() {
        return (
            <div className="home-page">
                <div className="home-page__header">
                    <div className="container">
                        <div className="row">
                            <div className="home-page__header__action col-md-4">
                                <h1 className="home-page__header__action__title">Diyetanı burda yarat</h1>
                                <MealsSelector onSubmit={this.onSubmit} />
                            </div>
                            <div className="col-md-8">
                                <img className="home-page__header__image" src={workout} />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="creator-part" className="home-page__creator">
                    <div className="container">
                    { this.state.selected && <CreatorForm count={this.state.count} /> }
                    </div>
                </div>
            </div>
        )
    }
}

export default Home