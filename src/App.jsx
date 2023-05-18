import { useState } from "react"
import Form from "./Form"
import Todo from "./Todo"

function App() {
  const [todos, setTodos] = useState([])

  return (
    <>
      <Form setTodos={setTodos} />
      <Todo todos={todos} setTodos={setTodos}/>
    </>
  )
}

export default App
