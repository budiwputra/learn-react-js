import {useState, useEffect} from 'react'

export const useCustomHooks = () => {

    const [time, setTime] = useState(0)

    useEffect(() => { // [kondisi] useEffect akan jalan ketika memenuhi kondisi, jika tidak hanya 1x saja

        setTimeout(() => {
            setTime(time + 1)
        }, 1000)
    }, [time])

    return time
}