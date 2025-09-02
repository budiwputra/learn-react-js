import useDataStore from "../../store/useDataStore"

const Header = () => {
    const count = useDataStore( (state) => state.count)
    return (
        <div>
            <h1>Header</h1>
            <p>Count : {count}</p>
        </div>
    )
}
export default Header