import {useState, useEffect, useRef} from 'react'
import Header from "./components/header"
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

  const form = useRef(null)

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
    console.log('show useEffect')
  }, []) // [kondisi] useEffect akan jalan ketika memenuhi kondisi, jika tidak hanya 1x saja


  return (

    <>
    {console.log('show render')}
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
        <p>{renderInput()} - {savePriority}</p>
        <p>{}</p>  
    </div>
    <div>
      <h1>Form</h1>
      <form
        ref={form}
        onSubmit={(e) => {
        e.preventDefault()
        console.log('form submit', e.target.fieldName.value)
        console.log('form submit', e.target.fieldAge.value)
        setInputForm({
          proName : e.target.fieldName.value,
          proAge : e.target.fieldAge.value
        })
        e.target.reset()
      }}>
        <input type="text" name='fieldName' placeholder='Masukkan nama' />
        <input type="text" name='fieldAge' placeholder='Masukkan umur' />
        <button type='submit'>Submit</button>
        <button onClick={() => {
          form.current.reset()

        }} >Clear</button>
        <p>{`Name : ${inputForm.proName}`}</p>
        <p>{`Age : ${inputForm.proAge}`}</p>
      </form>
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