import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Loading } from "../../imports/index";
const LoadingToRedirect = (children) => {
  const [count, setCount] = useState(2);
  console.log(children, "children");
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);

    count === 0 && navigate("/home");
    count === 0 && toast.info("Please Logout when you return to the site 🤔");
    return () => clearInterval(interval);
  }, [count, navigate]);

  return <Loading />;
};

export default LoadingToRedirect;
