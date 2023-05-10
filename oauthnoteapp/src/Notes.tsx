import React, {useState} from 'react';

function Notes() {

  //! Issue found because array needed types needed to be defined
  const [todos, setTodos] = useState([] as {id: number, name: string}[]); //todos is a list of todo objects
  const [todoName, setTodoName] = useState("");
  const [id, setId] = useState(0);

  //* Returns a list of todos as an unordered list of items with the todo name as the text of the list item
  //* Everytime the input changes, the value of the input is set to the todoName varable

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
  

  //*Adds a new todo to the list of todos
  function addTodo(item: { preventDefault: () => void; }) {
    item.preventDefault(); //prevents the page from refreshing
    setTodos([...todos, {id: id, name: todoName}]);
    setId(id + 1);
    }
  
  function removeTodo(id: number) {
    setTodos(todos.filter(todo => todo.id !== id));
  }
}

export default Notes;


