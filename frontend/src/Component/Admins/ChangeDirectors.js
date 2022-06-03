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
const initialState = {
  _id: "",
  name: "",
  image: "",    
};
const ChangeDirectors = () => {
    const state = useContext(GlobalStateAdmin);
    const [images, setImages] = useState(false);
    const [onEdit, setOnEdit] = useState(false);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(initialState);
    const { allDirectors, token } = useSelector((state) => state.admin);
    console.log(allDirectors,'allDirectors');
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
        allDirectors.forEach((product) => {
        console.log(product,'tientai')
          if (product._id == tokens) {
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
        setImages(false);
      }
    }, [tokens, allDirectors]);
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
        const res = await axios.post("/api/uploadImageDirector", formData, {
          headers: {
            "content-type": "multipart/form-data",
            Authorization: ` ${token.accessToken}`,
          },
        });
  
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
        await axios.patch(
          `/api/director/update/${user._id}`,
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
        navigate("/director");
      } catch (error) {
        alert(error.response.data.msg);
      }
    };
    const handleDestroy = async () => {
      try {
        setLoading(true);
        await axios.post(
          "/api/destroyImageDirector",
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
  
    return (
      <>
        <UserListStyle />
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
              <input
                type="text"
                placeholder="john"
                name="_id"
                id="id"
                value={user._id}
                onChange={handleChangeInput}
                disabled
              />
            </div>
            <div className="newUserItem">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                placeholder="john"
                name="name"
                value={user.name}
                onChange={handleChangeInput}
              />
            </div>
            <button className="newUserButton">SAVE</button>
          </form>
        </div>
      </>
    );
}

export default ChangeDirectors