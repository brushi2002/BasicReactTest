import React, { ReactNode } from "react";
import { useState, createContext, useContext } from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./Authorization/AuthContext";

interface Props {
  children?: ReactNode;
  //  element: string;
}

const PrivateRoute = ({ children, ...rest }: Props) => {
  const { authenticated } = useContext(AuthContext);
  //const isAuthenticated= useContext(email)
  return authenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
