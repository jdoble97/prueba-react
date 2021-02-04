import React from 'react'
import './styles/Card.css'


function Welcome(props){
    return(
        <div className="container">
            <div className="Fitness-User-Info">
                <h1>Hola {props.username}</h1>
                <p>Vamos a mantenernos sanos con ejercicio</p>
            </div>
        </div>
    )
}
export default Welcome