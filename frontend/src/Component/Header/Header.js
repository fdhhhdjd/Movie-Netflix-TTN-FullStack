import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { LogoutInitiate } from "../../Redux/Action/ActionAuth";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.auth);
  const [activeTab, setActiveTab] = useState("Home");
  const location = useLocation();
  const [images, setImages] = useState();
  const handleLogout = () => {
    dispatch(LogoutInitiate());
    toast.success("Logout Success Thank You!");
  };
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Header;
