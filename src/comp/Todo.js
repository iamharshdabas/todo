export default function Header({ todos }) {
  return (
    <>
      {todos.map((todo) => {
        return <h1>{todo.item}</h1>
      })}
    </>
  )
}
