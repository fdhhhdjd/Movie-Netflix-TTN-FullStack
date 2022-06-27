import { Outlet } from "react-router-dom";
import { LoadingToRedirectAdmin } from "../../imports/index";
function PrivateRouterAdmin({ element: Element, ...rest }) {
  const token = window.localStorage.getItem("firstLoginAdmin");
  return <>{!token ? <Outlet /> : <LoadingToRedirectAdmin/>}</>;
}

export default PrivateRouterAdmin;
