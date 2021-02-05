import React from 'react'
import Card from '../components/Card'
import ExercisesForm from '../components/ExercisesForm'
//images

export default class ExercisesNew extends React.Component {
    state = {
        form: {
            title: '',
            description: '',
            img: '',
            leftColor: '',
            rightColor: ''
        }
    }
    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    render() {
        return (

            <div className="row">
                <div className="col-sm">
                    <Card {...this.state.form}></Card>
                </div>
                <div className="col-sm">
                    <ExercisesForm onChange={this.handleChange}
                        form={this.state.form}></ExercisesForm>
                </div>
            </div>
        )
    }
}