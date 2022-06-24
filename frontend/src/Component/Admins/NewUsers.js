import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserListStyle } from "../../Style/Admin/NewUserList";
import axios from "axios";
import { LoadingImage } from "../../imports/index";
import { useContext } from "react";
import { GlobalStateAdmin } from "../../ContextsAdmin/GlobalStateAdmin";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { toast } from "react-toastify";
import {
    TopBar,
    SideBarAdmins,
  } from "../../imports/importAdmin/importsAdmin";
  import { GlobalStyleAmin } from "../../Style/Admin/GlobalStyleAmin";
const initialState = {
   phone_number:'',
    date_of_birth:'',
     sex:'',
  fullname: "", 
};
const NewUsers = () => {
    const state = useContext(GlobalStateAdmin);
    const [images, setImages] = useState(false);
    const [onEdit, setOnEdit] = useState(false);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(initialState);
    const { allUsers,token } = useSelector((state) => state.admin);
    const [callback, setCallback] = state.callback;
    const navigate = useNavigate();
    const { tokens } = useParams();
    const handleChangeInput = (e) => {
      const { name, value } = e.target;
      setUser({ ...user, [name]: value });
    };
    useEffect(() => {
      if (tokens) {
        setOnEdit(true);
        allUsers.forEach((product) => {
        // console.log(product,'tientai')
          if (product._id===tokens) {
            setUser(product);
            if (product.url === "") {
              setImages(product.image.url);
            } else {
              setImages(product.image);
            }
          }
        });
      } else {
        setOnEdit(false);
        setUser(initialState);
        console.log(initialState,'int')
        setImages(false);
      }
    }, [tokens, allUsers]);
    console.log(allUsers,'allUsers')
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
            Authorization: ` ${token.accessToken}`,
          },
        });
        console.log(res,'res')
  
        setLoading(false);
        setImages(res.data);
      } catch (error) {
        toast.error(error.response.data.msg);
      }
    };
    console.log(images, "images");
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!images)
        return swal("No Image Upload 😅.", {
          icon: "error",
        });
      try {
        let id=user._id
        await axios.patch(
        //   `/api/director/update/${user._id}`,
          `/api/auth/admin/customerAccount/${id}/update/info`,
          { ...user, image: images },
          {
            headers: {
              Authorization: `${token?.accessToken}`,
            },
          }
        );
        swal("Edit profile Successfully", {
          icon: "success",
        });
        setCallback(!callback);
        navigate("/users");
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
              Authorization: `${token.accessToken}`,
            },
          }
        );
        setLoading(false);
        setImages(false);
      } catch (err) {
        alert(err.response.data.msg);
      }
    };
    const styleUpload = {
      display: images ? "block" : "none",
    };
    console.log(user,'phone_numer')
  return (
    <>
      <GlobalStyleAmin />
      <TopBar />
      <div className="admin__container">
        <SideBarAdmins />
        
        <div className="upload">
          <input type="file" name="file" id="file_up" onChange={handleUpload} />
          {loading ? (
            <div id="file_img">
              <LoadingImage />
            </div>
          ) : (
            <div id="file_img" style={styleUpload}>
              
              <img src={images ? images.url : ""} alt="" />
              <span onClick={handleDestroy}>X</span>
            </div>
          )}
        </div>
        <div className="newUser">
          <h1 className="newUserTitle">Edit Director</h1>
          <form onSubmit={handleSubmit}>
            <div className="newUserItem">
              <label htmlFor="username">ID</label>
          
            </div>
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
              <label htmlFor="">date</label>
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
            <label htmlFor="sex">Gender</label>
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
        
            <button className="newUserButton">SAVE</button>
          </form>
        </div>
        <UserListStyle />
      </div>
    </>
  )
}

export default NewUsers
