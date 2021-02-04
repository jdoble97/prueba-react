import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Exercises from '../pages/Exercises'
import ExercisesNew from '../pages/ExercisesNew.js'
import NotFound from './NotFound'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/exercise" component={Exercises}></Route>
            <Route exact path="/exercise/new" component={ExercisesNew}></Route>
            <Route component={NotFound}></Route>
        </Switch>
    </BrowserRouter>
)
export default App