import React, { useState } from "react";
import './Signin.css'
import { Login } from "./Login/Login";
import { Register } from "./Register/Register";

function Signinpage() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="Signinpage">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default Signinpage;
