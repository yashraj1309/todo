import './App.css';
import AddForm from './Components/AddForm';
import { useState } from 'react';
import DisplayData from './Components/DisplayData';
import CompletedList from './Components/CompletedList';
import Button from "react-bootstrap/Button";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; // Import Routes and Route

function App() {
  const [addToggle, setAddToggle] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <header
          style={{
            padding: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h1 style={{ textAlign: "left" }}>To Do App</h1>
          <div>
            <Link to="/">
              <Button variant="outline-primary" style={{marginRight:'8px'}}>Home</Button>
            </Link>
            <Link to="/completed">
              <Button variant="outline-primary">Task History</Button>
            </Link>
          </div>
        </header>
        <Routes>
          <Route path="/completed" element={<CompletedList />} />
          <Route
            path="/"
            element={
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
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
