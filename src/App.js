import './App.css';
import Header from './comp/Header'
import Todo from './comp/Todo'

const onDelete = (todo) => {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i] === todo) {
      todos.splice(i, 1);
    }
  }
  console.log(todos)
}

const todos = [
  {
    item: 'wtf is this'
  },
  {
    item: 'idk'
  },
  {
    item: 'atleast its working'
  }
]

function App() {
  return (
    <div className='container'>
      <Header />
      <Todo todos={todos} onDelete={onDelete} />
    </div>
  );
}

export default App;
