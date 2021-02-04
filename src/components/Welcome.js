import React from 'react'
import './styles/Card.css'

const Welcome = ({username})=>(
    <div className="container">
    <div className="Fitness-User-Info">
        <h1>Hola {username}</h1>
        <p>Vamos a mantenernos sanos con ejercicio</p>
    </div>
</div>
)

export default Welcome