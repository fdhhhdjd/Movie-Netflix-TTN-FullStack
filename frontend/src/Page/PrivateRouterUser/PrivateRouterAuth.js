import React from "react";
import { Outlet } from "react-router-dom";
import { LoadingToRedirects } from "../../imports/index";
function PrivateRouter({ element: Element, ...rest }) {
  const token = window.localStorage.getItem("firstLogin");
  return <>{!token ? <Outlet /> : <LoadingToRedirects />}</>;
}

export default PrivateRouter;
