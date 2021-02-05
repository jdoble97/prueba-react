import {useState, useEffect} from 'react'
import fakeData from '../fake/data.json'

const useFetch = url =>{
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    //https://jsonplaceholder.typicode.com/posts
    //Se ejecuta después del primer renderizado y cada que se actualiza
    useEffect(()=>{
        fetch(url)
            .then(res=>res.json())
            .then(data=>{
                setData(fakeData)
                setLoading(false)
                console.log('hooks',data);
            })
            .catch(error=>{
                setLoading(false)
                setError(error)
            })
    }, [url])
    return {data, loading, error}
}
export default useFetch