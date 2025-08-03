import {useState, useEffect} from 'react'

export const useCustomHooks = () => {
    const [time, setTime] = useState(0)

    useEffect(() => {

        setTimeout(() => {
            setTime(time + 1)
        }, 1000)
    }, [time])

    return time
}