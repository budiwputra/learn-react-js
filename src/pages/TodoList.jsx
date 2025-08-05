import { useState} from "react"
import Header from '../components/Header'
import Form from '../components/Form'
import {useCustomHooks} from '../hooks/useApp'
import { useNavigate } from "react-router"
import useTodoListStore from "../store/useTodoListStore"

const TodoList = () => {

    const [count, setCount] = useState(1) //Nilai awal /Data awal ditaruh didalam () dan state punya 2 item [], [item 1, item 2] item 1= value, item 2 = function

    // const [todolist, setTodolist] = useState([])

    const [tasklist, setTasklist] = useState([])

    const navigate = useNavigate()

    const todolist = useTodoListStore(state => state.list)

    const [inputForm, setInputForm] = useState({
    proName : '',
    proAge : ''
    })

    const [calc, setCalc] = useState(0)

    const time = useCustomHooks()
    
    const handleClick = () => {
    console.log('button-click')
    setCount(count+1)
    }
    
    const handleAdd = () => {
        navigate('/create-todolist')

    }

    const handleTask = () => {
    console.log('button-task')
    setTasklist([
        {
        desc : 'Belajar',
        priority : 'High'
        },
        ...tasklist
    ])
    }


    return (
        <>
        <Header/>
        <div>
        <p>Hello World</p>
        <button onClick={handleClick} >Likes ({count})</button>
        </div>

        <div>
        <h1>Todo List</h1>
        {todolist.length === 0 ? (
        <p>Belum ada Todo</p>
        ) : (
        <ul>
        {todolist.map((item, index) => (
        <li key={index}>{`${item.description} - ${item.prior}`}</li>
        ))}
        </ul>   
        )}
        <button onClick={handleAdd}>Tambah</button>
        </div>

        
        <div>
        <h1>Task List</h1>
        {tasklist.length === 0 ? (
        <p>Belum ada Todo</p>
        ) : (
        <ul>
        {tasklist.map((item, index) => (
        <li key={index}>{`${item.desc} - ${item.priority}`}</li>
        ))}
        </ul>   
        )}
        <button onClick={handleTask}>Tambah</button>
        </div>

        <div>
        <Form onSubmit={(e) => {
        console.log('Component Form', e)
        setInputForm(e)
        }}/>
        <p>{`Name : ${inputForm.proName}`}</p>
        <p>{`Age : ${inputForm.proAge}`}</p>
        </div>

        <div>
        <button onClick={() => setCalc(calc + 1)} >Calculate : {calc}</button>
        </div>
        <div>
        <p>Time : {time}</p>
        </div> 
        </>
    )
}

export default TodoList