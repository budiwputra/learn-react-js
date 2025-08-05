import useHomeStore from "../../store/useHomeStore"

const Body = () => {
    const count = useHomeStore((state) => state.count)
    const setCount = useHomeStore((state) => state.setCount) // state disini bisa diganti namanya atau tidak?

    return (

        <div>
            <h1>Body</h1>
            <p>Body Count : {count}</p>
            <button onClick={() => setCount(count + 1) }>Body Count</button>
        </div>

    )
}
export default Body