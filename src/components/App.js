import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import Exercises from '../pages/Exercises'
import ExercisesNew from '../pages/ExercisesNew.js'


export default function App(){
    return (
        <BrowserRouter>
            <Route exact path="/exercise" component={Exercises}></Route>
            <Route exact path="/exercise/new" component={ExercisesNew}></Route>
        </BrowserRouter>
    )
}