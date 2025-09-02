import useDataStore from "../../store/useDataStore"

useDataStore

const Footer = () => {
    const count = useDataStore((state) => state.count )
    const setCount = useDataStore((state) => state.setCount )

    return (
        <div>
            <h1>Footer</h1>
            <p>Count : {count}</p>
            <button onClick={() => setCount( count + 1)} >Count</button>

        </div>
    )
}
export default Footer