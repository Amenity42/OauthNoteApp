
function Note(props: {
  editTodo: any; id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; removeTodo: (arg0: any) => void; todo: { id: any; }; 
}) {
  
    return (
            <li key={props.id}>
              {props.name}
              <button onClick={() => props.removeTodo(props.id)}>Remove</button>
              <button onClick={()=> props.editTodo(props.id)}>Edit</button>
            </li>
    );
}

export default Note;


