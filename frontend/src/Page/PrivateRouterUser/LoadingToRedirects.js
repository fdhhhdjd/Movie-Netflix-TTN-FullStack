import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Loading } from "../../imports/index";
const LoadingToRedirects = () => {
  const [count, setCount] = useState(2);
  const navigate = useNavigate();
  const location = useLocation();
  const { profile } = useSelector((state) => ({ ...state.auth }));

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);
    count === 0 &&
      navigate("/browse", { replace: true, state: { from: location } });
    count === 0 && toast.info(`Please Logout Account ${profile.fullname} 🤔`);
    return () => clearInterval(interval);
  }, [count, navigate, profile?.user]);

  return <Loading />;
};

export default LoadingToRedirects;
