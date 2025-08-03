import {useState} from 'react'
import Header from "./components/header"

const App = () => {

  const [count, setCount] = useState(1) //Nilai awal ditaruh didalam () dan state punya 2 item [], [item 1, item 2] item 1= value, item 2 = function

  const [todolist, setTodolist] = useState([])

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

  return (

    <>
    <Header/>
    <div>
      <p>Hello World</p>
      <button onClick={handleClick} >Likes ({count})</button>
    </div>
    <div>
      <p>Todo List</p>
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
    </>

  )

}

export default App