import React from 'react'
import Welcome from '../components/Welcome'
import ExerciseList from '../components/ExerciseList'
import Button from '../components/Button'
import fakeData from '../fake/data.json'
import imageButton from '../images/add.png'

export default class Exercises extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: fakeData
        }
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <Welcome username="Jorge"/>
                <ExerciseList data={fakeData} ></ExerciseList>
                <Button image={imageButton}></Button>
            </div>
        )
    }
}