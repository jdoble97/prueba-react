import React from 'react'
import './styles/Button.css'
import {Link} from 'react-router-dom'

export default function Button(props){
    return(
        <div className="addButton">
            <Link to="/exercise/new">
                <img src={props.image}></img>
            </Link>
        </div>
    )
}