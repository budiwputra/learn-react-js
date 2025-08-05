import { useNavigate } from "react-router"
import useTodoListStore from "../store/useTodoListStore"

const FormAddTodoList = () => {
    const navigate = useNavigate()
    const setList = useTodoListStore((state) => state.setList)  
    const goBack = () => {
        navigate(-1)
    }

    return (

        <div>
            <button
            onClick={goBack}
            >Back</button>
            <h1>FormAddTodoList</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    setList({
                        description : e.target.description.value,
                        prior : 'High'
                    })                  
                    goBack()
                }}
            >
                <input name="description" type="text" placeholder="Masukkan Todo" />
                <button type="submit">Submit</button>
            </form>
        </div>

    )
}

export default FormAddTodoList