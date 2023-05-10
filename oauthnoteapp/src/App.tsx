
import Notes from './Notes';
import Header from './Header';

import './App.css';

function App() {
  return (
    <>
      <Header/>
      <span id= "NoteContainer">
        <Notes/>
      </span>
    </>
  );  
}

export default App;
