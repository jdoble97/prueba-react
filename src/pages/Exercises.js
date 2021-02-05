import React from 'react'
import Welcome from '../components/Welcome'
import ExerciseList from '../components/ExerciseList'
import Button from '../components/Button'
import fakeData from '../fake/data.json'
import imageButton from '../images/add.png'
import Loading from '../components/Loading'
import FatalError from './500'

export default class Exercises extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: fakeData,
            loading: true,
            error: null
        }
    }

    componentDidMount() {
        setTimeout(()=>(this.makeFetch()), 500)
    }
    render() {
        if (this.state.loading) {
            return <Loading />
        }
        if(this.state.error){
            return <FatalError></FatalError>
        }
        return (
            <div>
                <Welcome username="Jorge" />
                <ExerciseList data={fakeData} ></ExerciseList>
                <Button image={imageButton}></Button>
            </div>
        )
    }

    makeFetch() {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'GET'
        })
            .then(data => data.json())
            .then(dataJson => {
                this.setState({
                    dataJson,
                    loading: false
                })
            })
            .catch(error => {
                console.log('error');
                this.setState({
                    loading:false,
                    error
                })
            })
    }
}