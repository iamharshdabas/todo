export default function Todo({ todos, onDelete }) {
  return (
    <>
      {todos.map((todo) => {
        return (
          <>
            <h1>{todo.item}</h1>
            <button className="btn btn-danger btn-sm" onClick={({}) => onDelete(todo)}>Delete</button>
          </>
        )
      })}
    </>
  )
}
