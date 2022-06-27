import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Loading } from "../../imports/index";
const LoadingToRedirect = () => {
  const [count, setCount] = useState(2);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);
    count === 0 &&
      navigate("/homeAdmin", { replace: true, state: { from: location } });
    count === 0 && toast.info("Please Logout Account Manager Admin 🤔");
    return () => clearInterval(interval);
  }, [count, navigate]);

  return <Loading />;
};

export default LoadingToRedirect;
