import React, { useState, useContext, useEffect, useRef } from "react";
  import { UserStyle } from "../../Style/Admin/UserStyle";
  import { Link } from "react-router-dom";
  import { useDispatch, useSelector } from "react-redux";
  import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
  } from "@material-ui/icons";
  import WcIcon from "@material-ui/icons/Wc";
  import moment from "moment";
  import "moment/locale/vi";
  import  {GlobalStateAdmin}  from "../../ContextsAdmin/GlobalStateAdmin";
  import LoadingImage from "../../Page/Loading/LoadingAdmin/LoadingImage";
  import swal from "sweetalert";
  import axios from "axios";
  import { toast } from "react-toastify";
  import { useNavigate, useParams } from "react-router-dom";
  import {useDesUpImage} from '../../imports/index'
  const initialState = {
    id: "", 
    fullname:"",
    email:"", 
    password:"", 
    sex:"", 
    date_of_birth:"",
    phone_number:""
  };
const ProfileAdmins = () => {
  const state = useContext(GlobalStateAdmin);

  const [onEdit, setOnEdit] = useState(false);

  const [user, setUser] = useState(initialState);
  const { profile, token } = useSelector((state) => state.admin);
  const { loading, handleUpload, handleDestroy, images, setImages } =
  useDesUpImage(token.accessToken);
 console.log(token.access,'token')
  const [callback, setCallback] = state.callback;
  useEffect(() => {
    if (profile.user) {
      setUser({ ...profile.user });
      if (profile.user.image.url === "") {
        setImages(profile.user.image.url);
      } else {
        setImages(profile.user.image);
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
        `/api/auth/admin/profile/update`,
        { ...user, image: images },
        {
          headers: {
            Authorization: `${token.accessToken}`,
          },
        }
      );
      swal("Edit profile Successfully", {
        icon: "success",
      });
      setCallback(!callback);
      // navigate("/profileAd");
    } catch (error) {
      alert(error.response.data.msg);
    }
  };
  
  const styleUpload = {
    display: images ? "block" : "none",
  };
  return (
    <>
      <UserStyle />
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">{`Profile Admin: ${profile.user.fullname}`}</h1>
        <Link to={`/changePassword`}>
            <button className="userAddButton">Change Password</button>
          </Link>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              {profile.user.image&&(<img src={profile.user.image.url} alt="" className="userShowImg" />)}
              
              <div className="userShowTopTitle">
                <span className="userShowUsername">
                  {`${profile.user.fullname} (Admin)`}
                </span>
                <span className="userShowUserTitle">Software Engineer</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">{profile.user.fullname}</span>
              </div>
              <div className="userShowInfo">
                <WcIcon className="userShowIcon" />
                <span className="userShowInfoTitle">
                  {
                       (profile.user.sex=== 1 && "Nam") ||
                      (profile.user.sex === 0 && "Nữ ")|| 'chưa điền giới tính'
                  

                  
                 }
                </span>
              </div>
              <div className="userShowInfo">
                <CalendarToday className="userShowIcon" />
                <span className="userShowInfoTitle">
                  {moment(`${profile.user.date_of_birth}`).format("Do MMM YYYY")}
                </span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">{profile.user.phone_number}</span>
              </div>
              <div className="userShowInfo">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">{profile.user.email}</span>
              </div>
              <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">Nha Trang | VIET NAM</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit Admin</span>
            <form className="userUpdateForm" onSubmit={handleSubmit}>
              <div className="userUpdateLeft">
                {/* <div className="userUpdateItem">
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder=""
                    name="username"
                    value={user.fullname}
                    className="userUpdateInput"
                    onChange={handleChangeInput}
                  />
                </div> */}
                <div className="userUpdateItem">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="fullname"
                    value={user.fullname}
                    placeholder="Anna Becker"
                    className="userUpdateInput"
                    onChange={handleChangeInput}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    name="email"
                    value={user.email}
                    placeholder="annabeck99@gmail.com"
                    className="userUpdateInput"
                    onChange={handleChangeInput}
                    disabled
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Phone</label>
                  <input
                    type="text"
                    name="phone_number"
                    value={user.phone_number}
                    placeholder="+1 123 456 67"
                    className="userUpdateInput"
                    onChange={handleChangeInput}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Date</label>
                  <input
                    type="date"
                    name="date_of_birth"
                    value={user.date_of_birth}
                    placeholder="New York | USA"
                    className="userUpdateInput"
                    onChange={handleChangeInput}
                  />
                </div>
                <div className="userUpdateItem">
                  <label htmlFor="gioitinh">Gender</label>
                  <div className="newUserGender userUpdateInput">
                    <input
                      type="radio"
                      value="1"
                      id="gioitinh"
                      name="sex"
                      checked={user.sex == 1}
                      onChange={handleChangeInput}
                    />
                    &nbsp; &nbsp;
                    <label htmlFor="male">Nam</label>
                    &nbsp; &nbsp; &nbsp;
                    <input
                      type="radio"
                      name="sex"
                      id="gioitinh"
                      value="0"
                      checked={user.sex == 0}
                      onChange={handleChangeInput}
                    />
                    &nbsp;&nbsp;
                    <label htmlFor="female">Nữ</label>
                  </div>
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <div className="upload">
                    <input
                      type="file"
                      name="file"
                      id="file_up"
                      onChange={handleUpload}
                    />
                    {loading ? (
                      <div id="file_img">
                        <LoadingImage />
                      </div>
                    ) : (
                      <div id="file_img" style={styleUpload}>
                  {images && (
                      <img
                        src={images ? images.url : images}
                        alt=""
                        style={styleUpload}
                        className="img-thumbnail"
                      />
                    )}
                        <span onClick={handleDestroy}>X</span>
                      </div>
                    )}
                  </div>
                </div>
                <button className="userUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
};

export default ProfileAdmins;
