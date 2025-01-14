import TodoNew from './components/todo/TodoNew';
import TodoData from './components/todo/TodoData';
import './components/todo/todo.css'
import reactLogo from './assets/react.svg';

//() => { }
const App = () => {
  const TQH = "Huy";
  const age = 23;
  const data = {
    address: "hanoi",
    country: "vietnam"
  }
  const addNewTodo = (name) => {
    alert(`call me ${name}`)  
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData
        name={TQH}
        age={age}
        data={data}

      />
      <div className='todo-image'>
        <img src={reactLogo} className='logo' />
      </div>
    </div>
  )
}

export default App
