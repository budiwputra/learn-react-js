import { useNavigate } from "react-router"
import useTodoStore from "../../store/useTodoStore"

const Todo = () => {
    const navigate = useNavigate()
    const list = useTodoStore((state) => state.list )
    return (
        <div>
            <h1>Todo List</h1>
                {list.length === 0 ? (<p>Belum ada Todo</p>) : (
                    <ul>
                        {list.map((item, index) => (
                            <li key={index}>{`${item.title} - ${item.desc}`}</li>
                        ))}                      
                    </ul>

                ) }

            <button onClick={() => navigate('/add-todo')}>Tambah Todo</button>
        </div>
    )
}
export default Todo
