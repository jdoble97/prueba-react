import React from 'react'
import Exercises from './Exercises'
import Loading from '../components/Loading'
import FatalError from './500'
import useFetch from '../hooks/useFetch'


const ExercisesContainer = ()=>{
    const {data, loading, error} = useFetch('https://jsonplaceholder.typicode.com/posts')
    if(loading)
        return <Loading></Loading>
    if(error)
        return <FatalError></FatalError>
    return <Exercises data={data}/>
}

export default ExercisesContainer