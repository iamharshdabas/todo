const Todo = ({ todos, setTodos }) => {

  const onDelete = (todo) => {
    setTodos(todos.filter((item) => {
      return item !== todo
    }))
  }

  return (
    <>
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

export default Todo
