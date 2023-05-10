import React, {useState} from 'react';

function Notes() {
  const [todos, setTodos] = useState(
    [
       {id: 0, name: "Todo 1"},
    ]
    //should load from DB
  );
  
  const [todoName, setTodoName] = useState("");
  const [id, setId] = useState(0);

  //* Returns a list of todos as an unordered list of items with the todo name as the text of the list item
  //* Everytime the input changes, the value of the input is set to the todoName varable

  if(todos[0].name === "Todo 1"){
    return (
    <>
      <h1>No Todos</h1>
      <form onSubmit={addTodo}>
        <input type="text" placeholder="Add a todo"  value={todoName} onChange={
          item => setTodoName(item.target.value)} 
        />
        <button>Add</button>
        <button>Remove</button>
      </form>;
    </>
    );
  }
  else{
    return (
      <div className="todoList">
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.name}
              <button onClick={() => removeTodo(todo.id)}>Remove</button>
            </li>
          ))}
        </ul>
        <form onSubmit={addTodo}>
          <input type="text" placeholder="Add a todo"  value={todoName} onChange={
            item => setTodoName(item.target.value)} 
          />
          <button>Add</button>
          <button>Remove</button>
        </form>
        <button>Share</button>
      </div>
    );
  }

  //*Adds a new todo to the list of todos
  function addTodo(item: { preventDefault: () => void; }) {
    item.preventDefault(); //prevents the page from refreshing
    if(todos[0].name === "Todo 1"){
      setTodos([{id: id, name: todoName}]);
      setId(0);
    }
    else{
      setTodos([...todos, {id: id, name: todoName}]);
      setId(id + 1);
    }
  
  } 
  
  function removeTodo(id: number) {
    setTodos(todos.filter(todo => todo.id !== id));
  }
}

export default Notes;


