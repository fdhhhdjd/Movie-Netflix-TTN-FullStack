import { DataGrid } from "@material-ui/data-grid";
import axios from "axios";
import moment from "moment";
import "moment/locale/vi";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { GlobalStateAdmin } from "../../ContextsAdmin/GlobalStateAdmin";
import { GetAllRateInitiate } from "../../Redux/Action/ActionFilmAdmin";
import { RatingStyle } from "../../Style/Admin/RatingStyle";
const Ratings = () => {
  const { rating } = useSelector((state) => state.film);
  // console.log("rating",rating)
  const { token } = useSelector((state) => state.admin);
  const state = useContext(GlobalStateAdmin);
  const [callback, setCallback] = state.callback;
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  // console.log(rating)
  const img =
    "https://png.pngtree.com/png-clipart/20190924/original/pngtree-businessman-user-avatar-free-vector-png-image_4827807.jpg";

  useEffect(() => {
    setCallback(true);
    dispatch(GetAllRateInitiate(token.accessToken));
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
          axios.delete(`/api/delete/all${id}`, {
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
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "UseName",
      width:160 ,
      renderCell: (params) => {
        console.log("params", params);
        return (
          <div className="productListItem">
            {" "}
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
    // {
    //   field: "user",
    //   headerName: "user",
    //   width: 250,
    //   renderCell: (params) => {
    //     console.log('params',params)
    //     return (
    //       <div className="productListItem">
    //         <img
    //           className="productListImg"
    //           src={params.row.user.image.url || img}
    //           alt=""
    //         />
    //         {params.row.user.fullname}
    //       </div>
    //     );
    //   },
    // },
    {
      field: "score",
      headerName: "Rating Star ⭐",
      width: 190,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <span>{params.row.score} ⭐</span>
          </div>
        );
      },
    },
    {
      field: " Films are rated",
      headerName: " Films are rated",
      width: 300,
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
        // console.log(params);
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
        // console.log(params);
        return (
          <div className="userListUser">
            {moment(`${params.row.updatedAt}`).format("Do MMM YYYY")}
          </div>
        );
      },
    },
    // {
    //   field: "action",
    //   headerName: "Action",
    //   width: 150,
    //   renderCell: (params) => {
    //     return (
    //       <>
    //         <DeleteOutline
    //           className="productListDelete"
    //           onClick={() => handleDelete(params.row._id)}
    //         />
    //       </>
    //     );
    //   },
    // },
  ];
  return (
    <>
      <RatingStyle />
      <div className="productList">
        <DataGrid
          getRowId={(r) => r._id}
          rows={rating}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          checkboxSelection
        />
      </div>
    </>
  );
};

export default Ratings;
