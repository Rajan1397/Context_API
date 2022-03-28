import "./App.css";
import React from "react";
import { Navbar } from "./Components/Navbar";
import { Login } from "./Components/Login";
import { AuthContext } from "./Contexts/AuthContext";
import AfterLogin from "./Components/AfterLogin";

function App() {
  const { isAuth } = React.useContext(AuthContext);

  return (
    <div className="App">
      <Navbar />
      {isAuth ? <AfterLogin /> : <Login />}
    </div>
  );
}

export default App;
