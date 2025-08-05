import useHomeStore from "../../store/useHomeStore"

const Header = () => {
    const count = useHomeStore((state) => state.count)

    return (
        <div>
            <h1>Header</h1>
            <p>Header Count : {count}</p>
        </div>
    )
}

export default Header