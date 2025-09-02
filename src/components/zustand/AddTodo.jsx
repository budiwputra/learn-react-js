import { useNavigate } from "react-router"
import useTodoStore from "../../store/useTodoStore"

const AddTodo = () => {
    const navigate = useNavigate()
    const setList = useTodoStore((state) => state.setList) 

    const goBack = () => {
        navigate(-1)
    }

    return (

        <div>
            <button onClick={goBack}>Back</button>
            <h1>Form Add Todo List</h1>
            <form onSubmit={(e) => {
                e.preventDefault()
                setList({
                    title : e.target.title.value,
                    desc : e.target.desc.value
                    
                })
                goBack()
            }} action="">
                <input type="text" name="title" placeholder="Masukkan title" />
                <input type="text" name="desc" placeholder="Masukkan desc" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddTodo