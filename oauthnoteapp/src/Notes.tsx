import React, {useState} from 'react';

function Notes() {
  const [todos, setTodos] = useState(
    [
      {id: 0, name: "Learn React"},
      {id: 1, name: "Learn TypeScript"},
      {id: 2, name: "Learn Redux"},
      {id: 3, name: "Learn React Router"},
      {id: 4, name: "Learn React Hooks"},
      {id: 5, name: "Learn React Context"}
    ]
  );
  
  const [todoName, setTodoName] = useState("");
  const [id, setId] = useState(0);
  //*Adds a new todo to the list of todos
  function addTodo(item: { preventDefault: () => void; }) {
    if(todoName === "") return; //if the todoName is empty, return (do nothing)
    item.preventDefault(); //prevents the page from refreshing
    setTodos([...todos, {id: id, name: todoName}]);
    setId(id + 1);
  } 
  
  //* Returns a list of todos as an unordered list of items with the todo name as the text of the list item
  //* Everytime the input changes, the value of the input is set to the todoName varable
  return (
    <div className="todoList">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
      <form onSubmit={addTodo}>
        <input type="text" placeholder="Add a todo"  value={todoName} onChange={
          item => setTodoName(item.target.value)} 
        />
        <button>Add</button>
      </form>
      <button>Remove</button>
      <button>Share</button>
    </div>
  );
}

export default Notes;


