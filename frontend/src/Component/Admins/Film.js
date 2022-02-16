import React, { useState, useContext, Fragment } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";

import { Link } from "react-router-dom";
import {FilmStyle } from "../../Style/Admin/FilmAdminStyle";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import swal from "sweetalert";
import { toast } from "react-toastify";
import { GlobalStateAdmin } from "../../ContextsAdmin/GlobalStateAdmin";
const Film = () => {
    const { film } = useSelector((state) => state.film);
    const { token } = useSelector((state) => state.admin);
    const state = useContext(GlobalStateAdmin);
    const [callback, setCallback] = state.callback;
    const [loading, setLoading] = useState(false);
    console.log(film,'taiheofa')

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
            axios.delete(`/api/film/delete/${id}`, {
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
      { field: "category", headerName: "Category", width: 300,
      renderCell: (params) => {
        return (
          <div className="productListItem">
              {params.row.category.map((item)=>{
                  return(
                      <Fragment key={item._id} >
                       {item.name} &nbsp;
                      </Fragment>
                  )
              })}
            {/* <img className="productListImg" src={params.row.image_film.url} alt="" /> */}
            {/* {params.row.title} */}
            {console.log(params.row.director,'rowrow')}
          </div>
        );
      },



     },
      {
        field: "title",
        headerName: "film",
        width: 250,
        renderCell: (params) => {
          return (
            <div className="productListItem">
              <img className="productListImg" src={params.row.image_film.url} alt="" />
              {params.row.title}
           
            </div>
          );
        },
      },
      { field: "director", headerName: "Director", width: 550 ,
      renderCell: (params) => {
        return (
          <div className="productListItem">
              {params.row.director.map((item)=>{
                  return(
                      <Fragment  key={item._id}>
                      
                      <img className="productListImg" src={item.image.url} />
                       {item.name} &nbsp;
                      </Fragment>
                  )
              })}
            {/* <img className="productListImg" src={params.row.image_film.url} alt="" /> */}
            {/* {params.row.title} */}
            {/* {console.log(params.row.director,'rowrow')} */}
          </div>
        );
      },
    
        },
      { field: "seriesFilm", headerName: "Series Film (Chap)", width: 550 ,
      renderCell: (params) => {
        return (
          <div className="productListItem">
              {params.row.seriesFilm.map((item)=>{
                  return(
                      <Fragment  key={item._id}>
                      
                      <img className="productListImg" src={item.url_image} />
                       {item.episode} &nbsp;
                      </Fragment>
                  )
              })}
            {/* <img className="productListImg" src={params.row.image_film.url} alt="" /> */}
            {/* {params.row.title} */}
            {/* {console.log(params.row.director,'rowrow')} */}
          </div>
        );
      },
    
        },
      { field: "description", headerName: "Description", width: 550 },
      {
        field: "filmLength",
        headerName: "Size",
        width: 110,
      },
      {
        field: "price",
        headerName: "Price (VND)",
        width: 160,
      },
      {
        field: "ageLimit",
        headerName: "Age Limit",
        width: 160,
      },
      {
        field: "year_production",
        headerName: "Year Production",
        width: 160,
      },
      {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: (params) => {
          return (
            <>
              <Link to={"/product/" + params.row.id}>
                <button className="productListEdit">Edit</button>
              </Link>
              <DeleteOutline
                className="productListDelete"
                onClick={() => handleDelete(params.row._id)}
              />
            </> 
          );
        },
      },
    ];
    return (
      <>
        <FilmStyle />
        <div className="productList">
          <Link to="/newFilm">
            <button className="userAddButton">Create</button>
          </Link>
          <DataGrid
            getRowId={(r) => r._id}
            rows={film}
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            checkboxSelection
          />
        </div>
      </>
    );
}

export default Film