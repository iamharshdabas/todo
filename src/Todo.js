export default function Todo({ todos, onDelete }) {
  return (
    <>
      {todos.length === 0 ? 'No Todos' :
        todos.map((todo) => {
          return (
            <>
              <h1>{todo.item}</h1>
              <button className="" onClick={() => onDelete(todo)}>Delete</button>
            </>
          )
        })
      }
    </>
  )
}
