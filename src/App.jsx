import { Routes, Route } from "react-router"
import Home from "./pages/Home"
import Detail from "./pages//Detail"
import TodoList from "./pages/TodoList"
import TaskList from "./pages/TaskList"
import Sleep from "./pages/Sleep"
import WrapPage from "./WrapPage"


const App = () => {

  return (
    <Routes>
      <Route path="/" element={<WrapPage/>}>
      <Route index element={<Home/>}/>
      <Route path='detail' element={<Detail/>} />
      <Route path='todolist' element={<TodoList/>}/>
      <Route path='tasklist' element={<TaskList/>}/>
      <Route path='sleep' element={<Sleep/>} />
      </Route>

      {/* <Route path="home">
        <Route index element={<Home/>} />
        <Route path='detail' element={<Detail/>} />
        <Route path='todolist' element={<TodoList/>} />
          <Route path="todolist"> 
            <Route path='tasklist' element={<TaskList/>} />
          </Route>
      </Route> */}
    </Routes>

  )

}

export default App