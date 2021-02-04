import React from 'react'
import './styles/Button.css'
import { Link } from 'react-router-dom'

const Button = (props) => (
    <div className="addButton">
        <Link to="/exercise/new">
            <img src={props.image}></img>
        </Link>
    </div>
)

export default Button