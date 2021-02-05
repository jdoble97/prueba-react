import React from 'react';
import exerciseImg from '../images/exercise.png';
import './styles/Card.css'
import circles from '../images/circles.png'

class Card extends React.Component {
    /* background: url('../../images/circles.png') no-repeat, linear-gradient(to right, #A74CF2, #617BFB); */
    constructor(props) {
        super(props);
        this.state = {
            image: exerciseImg
        }
    }

    render() {
        const { title, description, img, leftColor, rightColor } = this.props;
        return (
            <div className="card mx-auto Fitness-Card"
                style={{
                    backgroundImage: `url(${circles}), linear-gradient(to right, ${this.props.rightColor || '#a80077'}, ${this.props.leftColor || '#66ff00'})`
                }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img className="float-right" src={this.state.image} />
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{this.props.title}</h1>
                            <p>{this.props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;