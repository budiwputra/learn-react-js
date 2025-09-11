import { useEffect, useState } from "react"
import axios from "axios"

export const useGetData = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    const getData = async () => {
        try {
            setIsLoading(true)
            setIsError(false)       
            const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
            setData(res.data)
            console.log(res.data)
        } catch (error) {
            setIsError(true)
            console.log('error', error.response)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    console.log(data)

    return {
        data,
        getData,
        isLoading,
        isError
    }
}
