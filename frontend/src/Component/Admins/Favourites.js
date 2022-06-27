import React, { useState, useContext, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { GlobalStateAdmin } from "../../ContextsAdmin/GlobalStateAdmin";
import { FavouriteStyle } from "../../Style/Admin/FavouriteStyle";
import { useSelector,useDispatch } from "react-redux";
import axios from "axios";
import swal from "sweetalert";
import moment from "moment";
import "moment/locale/vi";
import {GetAllFavouriteInitiate}  from "../../Redux/Action/ActionFilmAdmin"
const Favourites = () => {
    const { favourite } = useSelector((state) => state.film);
  const { token } = useSelector((state) => state.admin);
  const state = useContext(GlobalStateAdmin);
  const [callback, setCallback] = state.callback;
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  console.log(favourite,'favourite')
  const img =
    "https://png.pngtree.com/png-clipart/20190924/original/pngtree-businessman-user-avatar-free-vector-png-image_4827807.jpg";

  useEffect(() => {
    setCallback(true);
    dispatch(GetAllFavouriteInitiate(token.accessToken));
  }, [callback, token]);

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      return await swal({
        title: "Are you sure you want delete ?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          axios.delete(`/favourite/delete/${id}`, {
            headers: { Authorization: ` ${token.accessToken}` },
          });
          setCallback(!callback);
          setLoading(false);
          swal("Delete successfully, wait Loading... 😉 !", {
            icon: "success",
          });
        } else {
          swal("Thank you for 😆'!");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  const columns = [
    { field: "_id", headerName: "ID", width: 150 },

    {
      field: "ten_hinhthu   c",
      headerName: "Name Payment",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img
              className="productListImg"
              src={params.row.user.image.url || img}
              alt=""
            />
            {params.row.user.fullname}
          </div>
        );
      },
    },
    {
      field: "title",
      headerName: " Film",
      width: 400,
      renderCell: (params) => {
        return <div className="productListItem">
                      <img
              className="productListImg"
              src={params.row.film.image_film.url || img}
              alt=""
            />
          {params.row.film.title}</div>;
      },
    },
    {
      field: "createdAt",
      headerName: "Date Create",
      width: 160,
      renderCell: (params) => {
        console.log(params);
        return (
          <div className="userListUser">
            {moment(`${params.row.createdAt}`).format("Do MMM YYYY")}
          </div>
        );
      },
    },
    {
      field: "updatedAt",
      headerName: "Date UpdateAt",
      width: 170,
      renderCell: (params) => {
        console.log(params);
        return (
          <div className="userListUser">
            {moment(`${params.row.updatedAt}`).format("Do MMM YYYY")}
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <>
      <FavouriteStyle />
      <div className="productList">
        <DataGrid
          getRowId={(r) => r._id}
          rows={favourite}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          checkboxSelection
        />
      </div>
    </>
  );
}

export default Favourites