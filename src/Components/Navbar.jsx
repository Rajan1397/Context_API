import { useContext } from "react";
import React from "react";
//import { Link } from "react-router-dom";

import styled from "styled-components";

import { AuthContext } from "../Contexts/AuthContext";

const LoginButton = styled.button`
  height: 100px;
  width: 100px;
  background-color: orange;

  border-radius: 5px;
  margin: 20px;
`;

const LogoutButton = styled.button`
  height: 100px;
  width: 100px;
  background-color: aliceblue;

  border-radius: 5px;
  margin: 20px;
`;

export const Navbar = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <div>
      {/*<Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/login">Login</Link>
  <Link to="/users">Users</Link>*/}
      {isAuth ? (
        <LogoutButton>Logout</LogoutButton>
      ) : (
        <LoginButton>Login</LoginButton>
      )}
    </div>
  );
};
