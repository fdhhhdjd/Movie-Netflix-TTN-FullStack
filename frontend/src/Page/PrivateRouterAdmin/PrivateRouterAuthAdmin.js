import React from "react";
import { Outlet } from "react-router-dom";
import { LoadingToRedirectAuth } from "../../imports";

function PrivateRouterAdmin({ element: Element, ...rest }) {
  const token = window.localStorage.getItem("firstLoginAdmin");

  return <>{!token ? <Outlet /> : <LoadingToRedirectAuth />}</>;
}

export default PrivateRouterAdmin;
