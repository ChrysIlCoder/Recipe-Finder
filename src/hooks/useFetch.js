import { useState, useEffect } from 'react'

export default function useFetch( endpoint ){
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const apiKey = "f6244685edef462badab6504ce6c8a16"
    const apiKey2 = "3431c339bf1e4c18bed6775ff5f617d5"

    async function fetchData(){
        setIsLoading(true)
    
        fetch(`https://api.spoonacular.com/recipes/${endpoint}?apiKey=${apiKey}`).then(response => {
            !response.ok && setError(response.status)
            return response.json()
        }).then(data =>
            setData(data)    
        ).catch(error => {
            setError(error)
        }).finally (
            setIsLoading(false)
        )
    }

    useEffect(() => {
        fetchData()
    }, [])

    function refetch(){
        fetchData()
    }

    return { data, isLoading, error, refetch }
}