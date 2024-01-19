import './App.css';
import AddForm from './Components/AddForm';
import { useState } from 'react';
import DisplayData from './Components/DisplayData';

function App() {
  const [addToggle, setAddToggle] = useState(false);
  return (
    <div className="App">
      <header style={{padding: '16px'}}>
        <h1 style={{ textAlign: "left" }}>To Do App</h1>

      </header>
      <div className="container">
        <button
          type="button"
          className="btn btn-primary mb-3"
          onClick={() => setAddToggle(!addToggle)}
        >
          {addToggle ? "Close Form" : "Add Task"}
        </button>
        {addToggle && <AddForm />}
        <DisplayData />
      </div>
    </div>
  );
}

export default App;
