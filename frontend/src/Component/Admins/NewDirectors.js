import React, { useState, useContext, useEffect } from "react";
import { GlobalStateAdmin } from "../../ContextsAdmin/GlobalStateAdmin";
import { NewDirectorStyle } from "../../Style/Admin/NewDirectorStyle";

import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { LoadingImage } from "../../imports/index";
import axios from "axios";
import swal from "sweetalert";
import { toast } from "react-toastify";
const initialState = {
  name: "",
  _id: "",
  image:"",
};
const NewDirectors = () => {
    const [images, setImages] = useState(false);
    const state = useContext(GlobalStateAdmin);
    const { token } = useSelector((state) => state.admin);
    const [onEdit, setOnEdit] = useState(false);
    const [directors, setDirectors] = useState(initialState);
    const [loading, setLoading] = useState(false);

    const [callback, setCallback] = state.callback;
    const navigate = useNavigate();
  
  
    const handleChangeInput = (e) => {
      const { name, value } = e.target;
      setDirectors({ ...directors, [name]: value });
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
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!images)
        return swal("No Image Upload 😅.", {
          icon: "error",
        });
      try {
        await axios.post(
        "/api/director/add",
          { ...directors, image: images },
          {
            headers: {
              Authorization: `${token.accessToken}`,
            },
          }
        );
        swal("add director Successfully", {
          icon: "success",
        });
        setCallback(!callback);
        navigate("/director");  
    }catch (error) {
      alert(error.response.data.msg);
    }
  }
    const handleDestroy = async () => {
      try {
        setLoading(true);
        await axios.post(
          "/api/destroyImageDirector",
          { public_id: images.public_id },
          {
            headers: {
              Authorization: ` ${token.accessToken}`,
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
  console.log(images,"aki")
    return (
      <>
        <NewDirectorStyle />
       
        <div className="newProduct">
          <div className="create_product">
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
                  <img src={images ? images.url : ""} alt="" />
                  <span onClick={handleDestroy}>X</span>
                </div>
              )}
            </div>
  
            <form onSubmit={handleSubmit}>
              <div className="row">
                <label htmlFor="product_id">Name Director</label>
                <input
                  type="text"
                  name="name"
                  id="tensp"
                  required
                  value={directors.name}
                  onChange={handleChangeInput}
                />
              </div>
              <button type="submit">{onEdit ? "Update" : "Create"}</button>
            </form>
          </div>
        </div>
      </>
    );
}

export default NewDirectors