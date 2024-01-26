import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AddForm from "./Components/AddForm";
import { useState } from "react";
import DisplayData from "./Components/DisplayData";
import CompletedList from "./Components/CompletedList";
import Button from "react-bootstrap/Button";
import './App.css';

function App(): React.ReactElement {
  const [addToggle, setAddToggle] = useState<boolean>(false);

  return (
    <BrowserRouter>
      <div className="App">
        <header
          style={{
            padding: "16px 100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h1 style={{ textAlign: "left", marginRight: '8px', textDecoration: 'line-through', marginBottom:0 }}>TO DO</h1>
          <div>
            <Link to="/">
              <Button variant="outline-primary" style={{ marginRight: "8px" }}>
                Home
              </Button>
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
              <div className="container d-flex align-center justify-content-center flex-column">
                <button
                  type="button"
                  className="btn btn-primary mb-3 task-form-toggle-btn"
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
