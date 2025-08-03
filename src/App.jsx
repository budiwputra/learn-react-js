import {useState} from 'react'
import Header from "./components/header"

const App = () => {

  const [count, setCount] = useState(1) //Nilai awal /Data awal ditaruh didalam () dan state punya 2 item [], [item 1, item 2] item 1= value, item 2 = function

  const [todolist, setTodolist] = useState([])

  const [input, setInput] = useState('')

  const [saveInput, setSaveInput] = useState('')

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

  const renderText = () => {

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
      <h1>Form</h1>
      {/* <form> */}
        <input value={input} type="text" placeholder='Task name' onChange={(e) => {
          setInput(e.target.value)
          console.log('input onChange', e.target.value)
        }} />
        <button onClick={() => {
          setInput('')
          saveInput('')
        
        }
          
        }
          disabled={input === ''}
          >Clear</button>
        
        <button onClick={() => {  
          setSaveInput(input)
          setInput('')
          }}
          disabled={input === ''}
          >Submit</button>
        <p>{renderText()}</p>  
      {/* </form> */}
    </div>
    </>

  )

}

export default App