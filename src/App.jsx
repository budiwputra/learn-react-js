import {useState, useEffect} from 'react'
import Header from "./components/header"
import Form from "./components/Form"
import {useCustomHooks} from './hooks/useApp'

const App = () => {

  const [count, setCount] = useState(1) //Nilai awal /Data awal ditaruh didalam () dan state punya 2 item [], [item 1, item 2] item 1= value, item 2 = function

  const [todolist, setTodolist] = useState([])

  const [input, setInput] = useState('')

  const [priority, setPriority] = useState('')

  const [saveInput, setSaveInput] = useState('')

    const [savePriority, setSavePriority] = useState('')

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
    console.log('button-todo')
    setTodolist([
      {
        desc : 'Belajar',
        priority : 'High'
      },
      ...todolist
    ])
  }

  const renderInput = () => {

    if (saveInput === '') {
      if (input === '') {
        return 'Kosong'
      } else {
        return 'Typing...'
      }
    } else {
      return saveInput

    }
  }

  useEffect ( () => {
  }, []) // [kondisi] useEffect akan jalan ketika memenuhi kondisi, jika tidak hanya 1x saja


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
        <li key={index}>{`${item.desc} - ${item.priority}`}</li>
      ))}
      </ul>   
      )}
      <button onClick={handleAdd}>Tambah</button>
    </div>
    <div>
      <h1>Input</h1>
        <input value={input} type="text" placeholder='Task name' onChange={(e) => {
          setInput(e.target.value)
          console.log('input onChange', e.target.value)
        }} />
        <input value={priority} type="text" placeholder='Priority' onChange={(e) => {
          setPriority(e.target.value)
        }} />
        <button onClick={() => {
          setInput('')
          saveInput('')        
        }}
          disabled={input === ''}
          >Clear</button>
        
        <button onClick={() => {  
          setSaveInput(input)
          setInput('')
          setSavePriority(priority)
          setPriority('')
          }}
          disabled={input === ''}
          >Submit</button>
        <p>{renderInput()}- {savePriority}</p>
        <p>{}</p>  
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

export default App