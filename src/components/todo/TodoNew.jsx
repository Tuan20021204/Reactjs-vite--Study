const TodoNew = (props) => {
  const{addNewTodo} = props;
  //addNewTodo();
  const  handleClick = () => {
    alert('You clicked me!');
  }
  const  handleonChange = (name) => {
    console.log(`handleonChange`,name)
  }
  return (    
    <div className='todo-new'>
      <input type="text" onChange={(event) =>handleonChange(event.target.value)}/>
      <button type='button'onClick={handleClick}> Add</button>
    </div>
  );
}
export default TodoNew;