import { useState } from "react"

const Detail = () => {

    const [count, setCount] = useState(sessionStorage.getItem('count') ?? 0)
    const handleChangeCount = () => {
        sessionStorage.setItem('count', Number(count)+1)
        setCount(Number(count) + 1)
    }
    return (
            <div>
                <h1>Detail</h1>
                <p>{count}</p>
                <button
                    onClick={handleChangeCount}
                >Count</button>
            </div>
    )
}
export default Detail