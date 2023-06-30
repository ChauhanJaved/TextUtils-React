import React from "react";
import { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {  
  const removeBodyColorClasses = () => {
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-info');
  };
  const changeBodyColorClass = (bodyColorClass) => {    
    removeBodyColorClasses();    
    document.body.classList.add(bodyColorClass);
  };
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    removeBodyColorClasses();
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0c1941";
      showAlert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark Mode Disabled", "success");
    }
  };
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <div className="App">
      <Router>
        <Navbar
          brandName="TextUtil"
          mode={mode}
          toggleMode={toggleMode}
          alert={alert}
          showAlert={showAlert}          
          changeBodyColorClass = {changeBodyColorClass}
        />
        <Alert alert={alert} showAlert={showAlert} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <TextForm
                heading="Enter the text to analyze"
                mode={mode}
                alert={alert}
                showAlert={showAlert}
              />
            }
          />
          <Route
            exact
            path="/about"
            element={<About mode={mode} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
