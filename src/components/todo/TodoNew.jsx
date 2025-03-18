import { useState } from "react";
const TodoNew = (props) => {
  const [valueInput, setValueInput] = useState("tuan")
  const { addNewTodo } = props;
  const handleClick = () => {
    addNewTodo(valueInput);
    setValueInput("")
  }
  const handleonChange = (name) => {
    setValueInput(name);
  }
  return (
    <div className='todo-new'>
      <input type="text"
        onChange={(event) => handleonChange(event.target.value)}
        value = { valueInput }
        />
      <button type='button' onClick={handleClick}> Add</button>
      <div>
        My text input is {valueInput}
      </div>
    </div>
  );
}

export default TodoNew;