
function Note(props: {
  editTodo: any; id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; removeTodo: (arg0: any) => void; todo: { id: any; }; 
}) {

  //* Returns a list of todos as an unordered list of items with the todo name as the text of the list item
  //* Everytime the input changes, the value of the input is set to the todoName varable
    return (
            <li key={props.id}>
              {props.name}
              <button onClick={() => props.removeTodo(props.id)}>Remove</button>
              <button onClick={()=> props.editTodo(props.id)}>Edit</button>
            </li>
    );
}

export default Note;


