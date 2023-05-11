import React, { Fragment, useState } from 'react';


function Note(props: {
  editTodo: any; id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; removeTodo: (arg0: any) => void; editId: any;
}) {
  const [todoName, setTodoName] = useState("");

  console.log(props.name);
  return (
    <li key={props.id}>
              {/* Checks id id matches if it does not it displays props.name */}

        
                {props.editId !== props.id && <Fragment>
                  {props.name}
                 
                  </Fragment>} 
                  {props.editId === props.id
                  && <input value={undefined} onChange={(e)=>setTodoName(e.target.value)}/>}
                  
          
              <button onClick={() => props.removeTodo(props.id)}>Remove</button>
              <button onClick={()=> props.editTodo(props.id)}>Edit</button>
            </li>
    );
}



export default Note;


