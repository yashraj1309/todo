import logo from './logo.svg';
import './App.css';
import AddForm from './Components/AddForm';
import { useState } from 'react';
import DisplayData from './Components/DisplayData';

function App() {
  const [addToggle, setAddToggle] = useState(false);
  return (
    <div className="App">
      <h1>TO-DO List</h1>
      <div className="container">
        <button type="button" class="btn btn-primary mb-3" onClick={()=>setAddToggle(!addToggle)}>
         {addToggle ? "Close Form" : "Add Task"} 
        </button>
         { addToggle && <AddForm/>
    }
    <DisplayData/>
      </div>
    </div>
  );
}

export default App;
