import { useState } from "react"

function App() {
  const [newTodo, setNewTodo] = useState('')
  const [todos, setTodos] = useState([])

  const onDelete = (todo) => {
    setTodos(todos.filter((item) => {
      return item !== todo
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setTodos((todos) => {
      return [
        ...todos,
        { message: newTodo }
      ]
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newTodoInput">
          New Todo:
          <input
            type="text"
            name="newTodoInput"
            value={newTodo}
            onChange={(event) => setNewTodo(event.target.value)}
            id="newTodoInput" />
        </label>
        <button type="submit">Add</button>
      </form>
      {todos.length === 0 && <h1>No Todo</h1>}
      {todos.map((todo) => {
        return (
          <>
            <h1>{todo.message}</h1>
            <button type="button" onClick={() => onDelete(todo)}>Delete</button>
          </>
        )
      })}
    </>
  )
}

export default App
