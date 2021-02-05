import React from 'react'
import Loading from '../components/Loading'
import ExerciseNew from '../pages/ExerciseNew'
//images

export default class ExercisesNew extends React.Component {
    state = {
        form: {
            title: '',
            description: '',
            img: '',
            leftColor: '',
            rightColor: ''
        },
        error: null,
        loading: false
    }
    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            },
        })
    }
    handleSubmit = e=>{
        this.setState({
            loading: true
        })
        e.preventDefault();
        
        //DADO QUE NO TENEMOS UNA API NO SE HARÁ UNA INSERCIÓN
        console.log('Este es el dato que se ha enviado',this.state.form);
        setTimeout(()=>{
            this.setState({loading:true})
            this.props.history.push('/exercise')
        }, 0)
    }

    render() {
        if(this.state.loading)
            return <Loading></Loading>
        return (<ExerciseNew
            form={this.state.form}
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}/>)
            
    }
}