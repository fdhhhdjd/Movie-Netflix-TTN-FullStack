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
const initialState = {
  fullname: "",
  name: "",
  phone_number: "",
  sex: "",
  date: "",
};
const EditProfile = () => {
  const state = useContext(GlobalState);
  const [images, setImages] = useState(false);
  const [onEdit, setOnEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(initialState);
  const { profile, refreshTokens } = useSelector((state) => state.auth);
  const [callback, setCallback] = state.callback;
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
        `/api/auth/profile/${user._id}`,
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
    } catch (error) {
      alert(error.response.data.msg);
    }
  };
  const handleDestroy = async () => {
    try {
      setLoading(true);
      await axios.post(
        "/api/destroyImageUser",
        { public_id: images.public_id },
        {
          headers: {
            Authorization: ` ${refreshTokens}`,
          },
        }
      );
      setLoading(false);
      setImages(false);
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const file = e.target.files[0];
      if (!file)
        return swal("File not Exists", {
          icon: "error",
        });
      if (file.size > 1024 * 1024)
        // 1mb
        return swal("Size too large!", {
          icon: "error",
        });
      if (file.type !== "image/jpeg" && file.type !== "image/png")
        // 1mb
        return swal("File format is incorrect.", {
          icon: "error",
        });
      let formData = new FormData();

      formData.append("file", file);
      setLoading(true);
      const res = await axios.post("/api/uploadImageUser", formData, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: `${refreshTokens}`,
        },
      });

      setLoading(false);
      setImages(res.data);
    } catch (error) {
      toast.error(error.response.data.msg);
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
          <div className="container1">
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
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    placeholder="john"
                    name="fullname"
                    value={user.fullname}
                    onChange={handleChangeInput}
                  />
                </div>
                <div className="newUserItem">
                  <label htmlFor="hoten">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    id="name"
                    name="name"
                    value={user.name}
                    onChange={handleChangeInput}
                  />
                </div>
                <div className="newUserItem">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    placeholder="john@gmail.com"
                    name="email"
                    id="email"
                    value={user.email}
                    onChange={handleChangeInput}
                    disabled
                    style={{ color: "black" }}
                  />
                </div>
                <div className="newUserItem">
                  <label htmlFor="dienthoai">Phone</label>
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
                  <label htmlFor="ngaysinh">date</label>
                  <input
                    type="date"
                    data-date=""
                    data-date-format="DD MMMM YYYY"
                    name="date"
                    id="date"
                    value={user.date}
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
