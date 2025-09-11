import { Routes, Route } from "react-router"
import Home from "./pages/Home"
import Detail from "./pages//Detail"
import TodoList from "./pages/TodoList"
import TaskList from "./pages/TaskList"
import Sleep from "./pages/Sleep"
import WrapPage from "./WrapPage"
import FormAddTodoList from "./pages/FormAddTodoList"
import Learn from "./pages/Learn"
import Data from "./components/Learn/Data"
import Todo from "./components/zustand/Todo"
import AddTodo from "./components/zustand/AddTodo"
import PlaceholdeApi from "./pages/PlaceholderApi"
import TaskPage from "./pages/TaskPage"
import ProductPage from "./pages/ProductPage"
import Product from "./pages/Product"


const App = () => {

  return (
    <Routes>
      <Route path="/" element={<WrapPage/>}>
      <Route index element={<Home/>}/>
      <Route path='/detail' element={<Detail/>} />
      <Route path='/todolist' element={<TodoList/>}/>
      <Route path='/tasklist' element={<TaskList/>}/>
      <Route path='/sleep' element={<Sleep/>} />
      <Route path='/learn' element={<Learn/>} />
      <Route path='/store' element={<Data/>} />
      <Route path='/todo' element={<Todo/>} />
      <Route path='/api' element={<PlaceholdeApi/>} />
      <Route path='/tasks' element={<TaskPage/>} />
      <Route path='/product' element={<ProductPage/>} />
      <Route path='/productapi' element={<Product/>} />
      </Route>
      <Route path='/add-todo' element={<AddTodo/>}/>
      <Route path='/edit-todo/:id' element={<AddTodo isEdit/>}/>

      <Route path='/create-todolist' element={<FormAddTodoList/>} />

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