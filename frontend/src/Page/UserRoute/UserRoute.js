import React from "react";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingToRedirect";
const UserRoute = ({ children, ...rest }) => {
  const { logout } = useSelector((state) => state.auth);
  return logout ? children : <LoadingToRedirect />;
};

export default UserRoute;
