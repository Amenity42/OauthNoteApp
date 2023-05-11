import React, {Fragment, useState} from 'react';
import Note from './NoteSingle';

function Notes() {

  //! Issue found because array needed types needed to be defined
  const [todos, setTodos] = useState([] as {id: number, name: string}[]); //todos is a list of todo objects
  const [todoName, setTodoName] = useState("");
  const [id, setId] = useState(0);
  // null || number
const [editId, setEditId] = useState(0);



  //* Returns a list of todos as an unordered list of items with the todo name as the text of the list item
  //* Everytime the input changes, the value of the input is set to the todoName varable

    return (
      <div className="todoList">
        <ul>
          {todos.map((todo) => (
            <Note id={todo.id} name={todo.name} removeTodo={removeTodo}  editTodo={editTodo} editId={editId}/>
          ))}
        </ul>
      
        <form className='form' onSubmit={(e) => {addTodo(e)}}>
          <input className="input" type="text" placeholder="Add a todo" value={todoName} onChange={
            item => setTodoName(item.target.value)} 
            />
          <button>Add</button> 
        </form>
        
        {/* <button>Share</button> */}
      </div>
    );
  

  //*Adds a new todo to the list of todos
  function addTodo(item: React.FormEvent<HTMLFormElement>) {
    item.preventDefault(); //prevents the page from refreshing
    if(!todoName) {
      let input = document.querySelector(".form");
      input?.animate([
        {boxShadow: '0px 0px 1rem red'},
        {transform: 'translateX(-10px)'},
        {transform: 'translateX(10px)'},
        {transform: 'translateX(-10px)'},
        {transform: 'translateX(10px)'},
        {transform: 'translateX(-10px)'},
        {transform: 'translateX(10px)'},  
        {transform: 'translateX(-10px)'},
        {transform: 'translateX(10px)'}
        
      ], { duration: 650});
      return;
    } //if the input is empty, do nothing and animate
    //console.log(todoName);
    setTodos([...todos, {id: id, name: todoName}]);
    setId(id + 1);
    }
  
  function removeTodo(id: number) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function editTodo(id:number) {
    setEditId(id);
  }

}

export default Notes;


