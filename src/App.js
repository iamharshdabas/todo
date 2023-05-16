import './App.css';
import Header from './comp/Header'
import Todo from './comp/Todo'

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
      <Todo todos={todos} />
    </div>
  );
}

export default App;
