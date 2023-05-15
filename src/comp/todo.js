export default function Header({ todos }) {
  const currentTodo = todos[0]
  return (
    <>
      <h1>{currentTodo.item}</h1>
    </>
  )
}
