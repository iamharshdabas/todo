import { useState } from "react"

const Form = ({ setTodos }) => {
  const [newTodo, setNewTodo] = useState('')

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
    </>
  )
}

export default Form
