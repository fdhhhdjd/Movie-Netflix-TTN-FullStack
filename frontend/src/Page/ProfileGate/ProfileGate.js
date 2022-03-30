import { ProfileGateStyle } from "../../Style/ProfileGateStyle/ProfileGateStyle";
import { logo } from "../../imports/image";
import { useState,useEffect } from "react";
import { EditOutlined } from "@material-ui/icons";
import {useSelector} from 'react-redux'
import swal from "sweetalert";
import axios from "axios";
const ProfileGate = () => {
  const users = [
    {
      name: "Gia Bao",
      avatar:
        "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdm_-DEYu1y2T38LnXWSy-u7u24MbY361Zg2WziU3fOqSJy3w2j3-7E9f6FQVC_Rv3zj3xGZ1SQM7F6G8WjR4XFnHwDL.png?r=fcd",
      adult: false,
    },
    {
      name: "Tien Tai",
      avatar:
        "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABeUqbfriC_pGWtwTa1KOx-ZSiQYa7ltLkOuduGxY_GRRc41ugYJNGYHe4LNcmshST4qkRSENvcs2xFomPc0rtX8wq2NG.png?r=b97",
      adult: true,
    },

  ];
  const [isEdit, setIsEdit] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setIsEdit(!isEdit);
  };
  const {profile,refreshTokens} = useSelector((state) => state.auth)
  const [adultUser,setAdultUser] = useState(false)

  const [user, setUser] = useState('')
  const handleGoToHome = async (adult) => {
      setAdultUser(adult);
      // await axios.post(
      //   `/api/film/selectForAdultOrChild`,
      //   {adult: adultUser },
      //   {
      //     headers: {
      //       Authorization: `${refreshTokens}`,
      //     },
      //   }
      // );
      window.location.href = "/home";
      // swal("Truy cập Thanh Cong 😍", {
      //   icon: "success",
      // });
    
  }
  return (
    <>
      <ProfileGateStyle />
      <div className="container">
        <img src={logo} className="logo" alt="" />
        <div className="info">
          <span className="title">
            {isEdit ? "Manage Profile:" : "Who's watching?"}
          </span>
          <ul className="user-container">
            {users.map((user, index) => (
              <li className="user" key={index} onClick={()=>handleGoToHome(user.adult)}>
                <img
                  className={isEdit ? "edit" : ""}
                  src={user.avatar}
                  alt=""
                />
                {isEdit && (
                  <span className="edit-icon">
                    <EditOutlined />
                  </span>
                )}
                <span>{user.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <span className="edit-profile">
          {isEdit ? (
            <a className="done" href="/" onClick={handleClick}>
              Done
            </a>
          ) : (
            <a href="/" onClick={handleClick}>
              Manage Profile
            </a>
          )}
        </span>
      </div>
    </>
  );
};

export default ProfileGate;
