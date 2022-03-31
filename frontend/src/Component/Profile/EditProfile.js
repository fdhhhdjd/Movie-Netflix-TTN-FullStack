import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { LoadingSmall, Header, MetaData } from "../../imports/index";
import { useContext } from "react";
import { GlobalState } from "../../Contexts/GlobalState";
import { EditProfileStyle } from "../../Style/ProfileStyle/EditProfileStyle";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { toast } from "react-toastify";
import {useDesUpImage} from '../../imports/index'
const initialState = {
  fullname: "",
  phone_number: "",
  sex: "",
  date_of_birth: "",
};
const EditProfile = () => {
  const state = useContext(GlobalState);

  const [onEdit, setOnEdit] = useState(false);

  const [user, setUser] = useState(initialState);
  const { profile, refreshTokens } = useSelector((state) => state.auth);
  const [callback, setCallback] = state.callback;
  const { loading, handleUpload, handleDestroy, images, setImages } =
  useDesUpImage(refreshTokens);
  console.log(state.callback);
  useEffect(() => {
    if (profile) {
      setUser({ ...profile });
      if (profile.url === "") {
        setImages(profile.image.url);
      } else {
        setImages(profile.image);
      }
    }
  }, [profile]);

  const navigate = useNavigate();
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!images)
      return swal("No Image Upload 😅.", {
        icon: "error",
      });
    try {
      await axios.patch(
        `/api/auth/customer/profile/update`,
        { ...user, image: images },
        {
          headers: {
            Authorization: `${refreshTokens}`,
          },
        }
      );
      swal("Edit profile Successfully", {
        icon: "success",
      });
      setCallback(!callback);
      navigate("/profile");
    } catch (error) {
      alert(error.response.data.msg);
    }
  };
  const styleUpload = {
    display: images ? "block" : "none",
  };
  return (
    <>
      <Header />
      {user && (
        <>
          <MetaData
            title={`Edit-Profile-${profile.fullname || profile.name}`}
          />
          <EditProfileStyle />
          <div className="edit-profile-container">
            <div className="upload">
              <input
                type="file"
                name="file"
                id="file_up"
                onChange={handleUpload}
              />
              {loading ? (
                <div id="file_img">
                  <LoadingSmall />
                </div>
              ) : (
                <div id="file_img" style={styleUpload}>
                  {profile.image && (
                    <img
                      src={images ? images.url : images}
                      alt=""
                      style={styleUpload}
                    />
                  )}
                  <span onClick={handleDestroy}>X</span>
                </div>
              )}
            </div>
            <div className="newUser">
              <h1 className="newUserTitle">Edit Profile</h1>
              <form onSubmit={handleSubmit}>
                <div className="newUserItem">
                  <label htmlFor="username">Username:</label>
                  <input
                    type="text"
                    placeholder="john"
                    name="fullname"
                    value={user.fullname}
                    onChange={handleChangeInput}
                  />
                </div>

                <div className="newUserItem">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    placeholder="john@gmail.com"
                    name="email"
                    id="email"
                    value={user.email}
                    onChange={handleChangeInput}
                    disabled
                    style={{ color: "#000" }}
                  />
                </div>
                <div className="newUserItem">
                  <label htmlFor="dienthoai">Phone:</label>
                  <input
                    type="text"
                    placeholder="+1 123 456 78"
                    name="phone_number"
                    id="phone_number"
                    value={user.phone_number}
                    onChange={handleChangeInput}
                  />
                </div>
                <div className="newUserItem">
                  <label htmlFor="ngaysinh">Date:</label>
                  <input
                    type="date"
                    data-date=""
                    data-date-format="DD MMMM YYYY"
                    name="date_of_birth"
                    id="date_of_birth"
                    value={user.date_of_birth}
                    onChange={handleChangeInput}
                  />
                </div>

                <div className="newUserItem">
                  <label htmlFor="gioitinh">Gender</label>
                  <div className="newUserGender">
                    <input
                      type="radio"
                      value="1"
                      id="sex"
                      name="sex"
                      checked={user.sex == 1}
                      onChange={handleChangeInput}
                    />
                    <label htmlFor="male">Nam</label>
                    <input
                      type="radio"
                      name="sex"
                      id="sex"
                      value="0"
                      checked={user.sex == 0}
                      onChange={handleChangeInput}
                    />
                    <label htmlFor="female">Nữ</label>
                  </div>
                </div>
                <button className="newUserButton">Edit Profile</button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default EditProfile;
