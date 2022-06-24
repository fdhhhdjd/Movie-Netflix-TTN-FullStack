import React, { useState, useContext, useEffect } from "react";
import { GlobalStateAdmin } from "../../ContextsAdmin/GlobalStateAdmin";
import { NewFilmStyle } from "../../Style/Admin/NewFilmStyle";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { LoadingImage } from "../../imports/index";
import axios from "axios";
import swal from "sweetalert";
import { toast } from "react-toastify";
const initialState = {
  title: "",
  description: "",
  price: 0,
  image_film: "",
  year_production: "",
  country_production: "",
  ageLimit: "",
  director: "",
  filmLength: 0,
  category: "",
};
const NewFilms = () => {
  const [images, setImages] = useState(false);
  const state = useContext(GlobalStateAdmin);
  const { film, categories } = useSelector((state) => state.film);
  const { token, allDirectors } = useSelector((state) => state.admin);
  const [onEdit, setOnEdit] = useState(false);
  const [films, setFilms] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [loadingForm, setLoadingForm] = useState(false);
  const [addSeriesFilm, setAddSeriesFilm] = useState(false);
  const [video, setVideo] = useState(false);
  const [callback, setCallback] = state.callback;
  console.log(allDirectors, "director");
  const navigate = useNavigate();
  const { tokens } = useParams();
  useEffect(() => {
    if (tokens) {
      setOnEdit(true);
      film.forEach((product) => {
        if (product._id == tokens) {
          setFilms(product);
          console.log(product);
          if (product.image_film.url === "") {
            setImages(product.url);
          } else {
            setImages(product);
          }
        }
      });
    } else {
      setOnEdit(false);
      setFilms(initialState);
      setImages(false);
    }
  }, [film, tokens]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFilms({ ...films, [name]: value });
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
      const res = await axios.post("/api/uploadImageFilm", formData, {
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
  const handleVideo = async (e) => {
    e.preventDefault();
    try {
      const file = e.target.files[0];
      if (!file)
        return swal("File not Exists", {
          icon: "error",
        });
      let formData = new FormData();

      formData.append("file", file);
      setLoading(true);
      const res = await axios.post("/api/uploadVideoFilm", formData, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: ` ${token.accessToken}`,
        },
      });

      setLoading(false);
      setVideo(res.data);
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!images)
    //   return swal("No Image Upload 😅.", {
    //     icon: "error",
    //   });

    try {
      if (onEdit) {
        await axios.patch(
          `/api/film/update/${films.id}`,
          { ...films, public_id: images.public_id, url: images.url },
          {
            headers: {
              Authorization: ` ${token.accessToken}`,
            },
          }
        );
        swal("Edit product successfully 🤩", {
          icon: "success",
        });
      } else {
        await axios.post(
          "/api/film/add",
          {
            ...films,
            director: [films.director],
            category: [films.category],
            image_film: {
              public_id: images.public_id,
              url: images.url,
            },
            image_title: {
              public_id: images.public_id,
              url: images.url,
            },
            seriesFilm: [
              {
                episode: "1",
                public_id_video: video.public_id,
                url_video: video.url,
                url_image: images.url,
                public_id_image: images.public_id,
              },
            ],
          },
          {
            headers: {
              Authorization: ` ${token.accessToken}`,
            },
          }
        );
        swal("Add product successfully 🤩", {
          icon: "success",
        });
      }

      setCallback(!callback);
      navigate("/film");
    } catch (error) {
      alert(error.response.data.msg);
    }
  };
  const handleDestroy = async () => {
    try {
      setLoading(true);
      await axios.post(
        "/api/destroyImageFilm",
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
      <NewFilmStyle />
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
                <img src={images ? images.url : images} alt="" />
                <span onClick={handleDestroy}>X</span>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <label htmlFor="product_id">Name Film</label>
              <input
                type="text"
                name="title"
                id="tensp"
                required
                value={films.title}
                onChange={handleChangeInput}
              />
            </div>
            <input
              type="file"
              name="files"
              id="file_up"
              style={{ border: "red" }}
              onChange={handleVideo}
            />
            <div className="row">
              <label htmlFor="product_id">Series Film Film &nbsp;</label>
            </div>
            <div className="row">
              <label htmlFor="director">Directors: </label>
              <select
                name="director"
                value={films.director}
                onChange={handleChangeInput}
              >
                <option value="">Please select a director</option>
                {allDirectors.map((director) => (
                  <option value={director._id} key={director._id}>
                    {director.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="row">
              <label htmlFor="title">Description</label>
              <input
                type="text"
                name="description"
                id="chitiet"
                required
                value={films.description}
                onChange={handleChangeInput}
              />
            </div>
            <div className="row">
              <label htmlFor="title">CountryProduction</label> &nbsp;
              <input
                type="text"
                name="country_production"
                id="chitiet"
                required
                value={films.country_production}
                onChange={handleChangeInput}
              />
            </div>
            <div className="row">
              <label htmlFor="title">Year Production</label> &nbsp;
              <input
                type="text"
                name="year_production"
                id="chitiet"
                required
                value={films.year_production}
                onChange={handleChangeInput}
              />
            </div>
            <div className="row">
              <label htmlFor="title">Lenght Film</label> &nbsp;
              <input
                type="number"
                name="filmLength"
                id="gia"
                required
                value={films.filmLength}
                onChange={handleChangeInput}
              />
            </div>

            <div className="row">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                name="price"
                id="gia"
                required
                value={films.price}
                onChange={handleChangeInput}
              />
            </div>
            <div className="row">
              <label htmlFor="price">ageLimit</label>
              <input
                type="number"
                name="ageLimit"
                id="gia"
                required
                value={films.ageLimit}
                onChange={handleChangeInput}
              />
            </div>

            <div className="row">
              <label htmlFor="categories">Categories: </label>
              <select
                name="category"
                value={films.category}
                onChange={handleChangeInput}
              >
                <option value="">Please select a category</option>
                {categories.map((category) => (
                  <option value={category._id} key={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit">{onEdit ? "Update" : "Create"}</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewFilms;
