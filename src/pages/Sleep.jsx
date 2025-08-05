import { useNavigate } from "react-router"
import { useState } from "react"

const Sleep = () => {

    const navigate = useNavigate()
    const [isPending, setIsPending] = useState(false)

    return (
        <div>
            <h1>Sleep</h1>
            <button
                onClick={() => {
                    setIsPending(true)
                    setTimeout(() => {
                        setIsPending(false)
                        navigate('/')
                    }, 2000)

                }}
            >{isPending ? 'Redirecting...' : 'Go to Home'}</button>
            <button
                onClick={() => {
                    navigate(-1)
                }}
            >Back</button>
        </div>
    )
}
export default Sleep