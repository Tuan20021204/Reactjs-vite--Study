const TodoData = (props) => {
    console.log("check props: ", props);
    const { name, age, data } = props;
    return (
      <div className='todo-data'>
        <div>My name is {name}</div>
        <div>Learn React</div>
        <div>Watching Youtube</div>
        <div>
            {JSON.stringify(props.todoList)}
        </div>
      </div>
    );
  }
  export default TodoData;