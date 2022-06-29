import { Outlet } from "react-router-dom";

import LoadingToRedirectsAdmins from "./LoadingToRedirectsAdmins";

function PrivateRouterAdmin({ element: Element, ...rest }) {
  const token = window.localStorage.getItem("firstLoginAdmin");
  return <>{!token ? <Outlet /> : <LoadingToRedirectsAdmins/>}</>;
}

export default PrivateRouterAdmin;