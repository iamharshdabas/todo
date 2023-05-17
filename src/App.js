import Todo from './Todo'
import { useState } from "react";

function App() {
  const onDelete = (todo) => {
    setTodos(todos.filter((item) => {
      return item !== todo
    }))
  }

  let [todos, setTodos] = useState([
    {
      item: 'wtf is this'
    },
    {
      item: 'idk'
    },
    {
      item: 'atleast its working'
    }
  ])

  return (
    <div className='container'>
      <Todo todos={todos} onDelete={onDelete} />
    </div>
  );
}

export default App;
