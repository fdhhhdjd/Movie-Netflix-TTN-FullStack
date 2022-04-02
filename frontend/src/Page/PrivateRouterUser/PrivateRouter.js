import React from "react";
import { Outlet } from "react-router-dom";
import { LoadingToRedirect } from "../../imports/index";
function PrivateRouter({ element: Element, ...rest }) {
  const token = window.localStorage.getItem("firstLogin");
  return <>{token ? <Outlet /> : <LoadingToRedirect />}</>;
}
export default PrivateRouter;
