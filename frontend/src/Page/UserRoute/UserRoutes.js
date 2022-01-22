import React from "react";
import { useSelector } from "react-redux";
import LoadingToRedirects from "./LoadingToRedirects";
const UserRoutes = ({ children, ...rest }) => {
  const { logout } = useSelector((state) => state.auth);
  return !logout ? children : <LoadingToRedirects />;
};

export default UserRoutes;
