import React from "react";
import { Outlet } from "react-router-dom";
import LoadingToRedirectAdmin from "./LoadingToRedirectAdmin";

// import {LoadingToRedirectsAdmin} from './LoadingToRedictAdmin'

function PrivateAdmin({ element: Element, ...rest }) {
  const token = window.localStorage.getItem("firstLoginAdmin");
  return <>{token ? <Outlet /> : <LoadingToRedirectAdmin/>}</>;
}
export default PrivateAdmin;