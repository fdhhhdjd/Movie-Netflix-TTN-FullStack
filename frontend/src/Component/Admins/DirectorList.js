import React, { useState, useContext } from "react";
// import { userRows } from "../../utils/DataChart";
import { AiFillDelete } from "../../imports/importAdmin/Icons";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { DirectorLists } from "../../Style/Admin/DirectorLists";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import "moment/locale/vi";
import { GlobalStateAdmin } from "../../ContextsAdmin/GlobalStateAdmin";
import axios from "axios";
import swal from "sweetalert";
import { toast } from "react-toastify";

const DirectorList = () => {
    const state = useContext(GlobalStateAdmin);
    const { token } = useSelector((state) => state.admin);
    const [callback, setCallback] = state.callback;
    const [loading, setLoading] = useState(false);
  
    const handleDelete = async (_id) => {
      try {
        setLoading(true);
        return await swal({
          title: "Are you sure you want delete ?",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            axios.delete(`/api/director/delete/${_id}`, {
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
      } catch (err) {
        toast.error(err.response.data.msg);
      }
    };
  
    const { allDirectors } = useSelector((state) => state.admin);
    console.log(allDirectors,'allDirectors ')
    const img =
      "https://png.pngtree.com/png-clipart/20190924/original/pngtree-businessman-user-avatar-free-vector-png-image_4827807.jpg";
    const columns = [
      { field: "_id", headerName: "ID", width: 160 },
      {
        field: "hoten",
        headerName: "DisplayName and Image",
        width: 250,
        renderCell: (params) => {
          return (
            <div className="userListUser">
              <img className="userListImg" src={params.row.image.url} alt="" />
              {params.row.name}
            </div>
          );
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
              <Link to={"/changeDirector/" + params.row._id}>
                <button className="userListEdit">Edit</button>
              </Link>
              <AiFillDelete
                className="userListDelete"
                onClick={() => handleDelete(params.row._id)}
              />
            </>
          );
        },
      },
    ];
    return (
      <>
      <DirectorLists />
        
        <div className="userList">
          <Link to="/newDirector">
          <button className="userList__Button">Create</button>
          </Link>
          <DataGrid
            getRowId={(r) => r._id}
            rows={allDirectors} 
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            checkboxSelection
          />
          
          
        </div>
        {/* <div>
        {allDirectors.map((item) => {
          return(
            <li key={item.id}>{item.name}</li>
          )
        })}

        </div> */}
      </>
    );
  
}

export default DirectorList 