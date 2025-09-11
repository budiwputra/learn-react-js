import { useNavigate, useParams } from "react-router"
import useTodoStore from "../../store/useTodoStore"
import { useRef, useEffect } from "react"

const AddTodo = ({isEdit}) => {
    const navigate = useNavigate()
    const {id} = useParams()
    const setList = useTodoStore((state) => state.setList)
    const updateList = useTodoStore((state) => state.updateList) 
    const list = useTodoStore((state) => state.list)

    const goBack = () => {
        navigate(-1)
    }
    
    const formRef = useRef(null)

    const optionCategory = [ {
        label : 'Desain',
        value : 'desain'
    },
    {
        label : 'Pemasran',
        value : 'pemasaran'
    },
    {
        label : 'Teknologi',
        value : 'teknologi'
    }
    ]

    useEffect(() => {
        if (isEdit) {
            formRef.current.title.value = list[id].title,
            formRef.current.desc.value = list[id].desc
        }
    }, [])
    console.log(id)
    console.log(list[id])

    return (

        <div>
            <button onClick={goBack}>Back</button>
            <h1>Form {isEdit ? "Edit" : "Add"} Todo List</h1>
            <form ref={formRef} onSubmit={(e) => {
                e.preventDefault()
                if (isEdit) {
                    updateList(id, {
                    title : e.target.title.value,
                    desc : e.target.desc.value,
                    category : e.target.status.value
                    })
                } else {                 
                setList({
                    title : e.target.title.value,
                    desc : e.target.desc.value,
                    category : 'desain'                   
                })
                }
                goBack()
            }} action="">
                <input type="text" name="title" placeholder="Masukkan title" />
                <input type="text" name="desc" placeholder="Masukkan desc" />
                {isEdit && (
                    <select name="status" id="status">
                        {optionCategory.map((item, index) => (
                            <option key={index} label={item.label} value={item.value}></option>
                        ))}
                    </select>
                )}
                <button type="submit">{isEdit ? "Update" : "Submit"}</button>
            </form>
        </div>
    )
}

export default AddTodo