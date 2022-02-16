import React, { useState, useContext, useEffect } from "react";
import { FilmIdStyle } from "../../Style/Admin/FilmIdStyle";
import { GlobalStateAdmin } from "../../ContextsAdmin/GlobalStateAdmin";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import swal from "sweetalert";
import { toast } from "react-toastify";
const Categorys = () => {
  const { categories } = useSelector((state) => state.film);
  const { token } = useSelector((state) => state.admin);
  const state = useContext(GlobalStateAdmin);
  const [callback, setCallback] = state.callback;
  const [category, setCategory] = useState('');
  const [onEdit, setOnEdit] = useState(false);
  const [id, setID] = useState("");
  const navigate = useNavigate();
  console.log(categories,'category')
  const createCategory = async (e) => {
    e.preventDefault();
    try {
      if (onEdit) {
        const res = await axios.put(
          `/api/category/update/${id}`,
          { name: category },
          {
            headers: {
              Authorization: `${token.accessToken}`,
            },
          }
        );
        setOnEdit(false);
        setCategory("");
        swal(`${res.data.msg} 🤩`, {
          icon: "success",
        });
      } else {
        const res = await axios.post(
          "/api/category/add",
          { name: category },
          {
            headers: {
              Authorization: `${token.accessToken}`,
            },
          }
        );
        swal(`${res.data.msg} 🤩`, {
          icon: "success",
        });
        setCategory("");
      }
      setCallback(!callback);
    
    } catch (error) {
      alert(error.response.data.msg);
    }
  };
  const deleteCategory = async (id) => {
    try {
      return await swal({
        title: "Are you sure you want delete ?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          axios.delete(`/api/category/delete/${id}`, {
            headers: {
              Authorization: ` ${token.accessToken}`,
            },
          });
          swal("Delete successfully, wait Loading... 😉 !", {
            icon: "success",
          });
          setCallback(!callback);
        } else {
          swal("Thank you for 😆'!");
        }
      });
    } catch (err) {
      swal("Oh no lucky Thank you for 🥴!");
    }
  };
  const editCategory = async (_id, name) => {
    setID(_id);
    setCategory(name);
    setOnEdit(true);
  };
  return (
    <>
      <FilmIdStyle />
      <div className="categories">
        <form onSubmit={createCategory}>
          <label htmlFor="category">Category</label>
          <input
            type="text"
            name="name"
            value={category}
            required
            onChange={(e) => setCategory(e.target.value)}
          />

          <button type="submit">{onEdit ? "Update" : "Create"}</button>
        </form>

        <div className="col">
          {categories.map((category) => (
            <div className="row" key={category._id}>
              <p>{category.name}</p>

              <div>
                <button
                  onClick={() => editCategory(category._id, category.name)}
                >
                  Edit
                </button>
                <button onClick={() => deleteCategory(category._id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Categorys