import React from "react";
import { AuthContext } from "../Contexts/AuthContext";

export default function AfterLogin() {
  const { token } = React.useContext(AuthContext);
  return (
    <div>
      <h1> dsfds {token}</h1>
    </div>
  );
}
