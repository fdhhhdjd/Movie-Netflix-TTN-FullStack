import React,{useState,useContext} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete } from "../../imports/importAdmin/Icons";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import moment from "moment";
import "moment/locale/vi";
import { GlobalStateAdmin } from "../../ContextsAdmin/GlobalStateAdmin";
import axios from "axios";
import swal from "sweetalert";
import { toast } from "react-toastify";
import { ManagerUsersStyle } from '../../Style/Admin/ManagerUsersStyle';
const ManagerUsers = () => {
    const state = useContext(GlobalStateAdmin);
    const { token } = useSelector((state) => state.admin);
    const [callback, setCallback] = state.callback;
    const [loading, setLoading] = useState(false);
    const { allUsers } = useSelector((state) => state.admin);
    console.log(allUsers,'allUsers ')
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
                {params.row.fullname}
              </div>
            );
          },
        },
        {
          field: "email",
          headerName: "Email",
          width: 250,
          renderCell: (params) => {
            return (
              <div className="userListUser">
  
                {params.row.email}
              </div>
            );
          },
        },
        {
          field: "account",
          headerName: "Account",
          width: 250,
          renderCell: (params) => {
            return (
              <div className="userListUser">
  
                {params.row.role=== 0 ?("customer"):("admin")}
              </div>
            );
          },
        },
        {
          field: "gender",
          headerName: "Gender",
          width: 250,
          renderCell: (params) => {
            return (
              <div className="userListUser">
  
                {params.row.adult === 'kid'|| params.row.adult==="adult"? (params.row.adult):("no age")}
              </div>
            );
          },
        },
        {
          field: "veryfied",
          headerName: "Veryfied",
          width: 250,
          renderCell: (params) => {
            return (
              <div className="userListUser">
  
                {params.row.verify ===true ? ("Verify"):("Not verified")}
              </div>
            );
          },
        },
        {
          field: "Sex",
          headerName: "Sex",
          width: 250,
          renderCell: (params) => {
            return (
                
                <div className="userListUser">
    
                    {params.row.sex === 1 ? (
                        'Nam'
                    ):('Nữ')}
                </div>
            );
          },
        },
        {
          field: "createdAt",
          headerName: "Date Create",
          width: 160,
          renderCell: (params) => {
        
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
                <Link to={"/newusers/" + params.row._id}>
                  <button className="userListEdit">Edit</button>
                </Link>
                <AiFillDelete
                  className="userListDelete"
                //   onClick={() => handleDelete(params.row._id)}
                />
              </>
            );
          },
        },
      ];
  return (
    <>
        <ManagerUsersStyle/>
        <div className="userList">
          <Link to="">
          <button className="userList__Button">Create</button>
          </Link>
          <DataGrid
            getRowId={(r) => r._id}
            rows={allUsers} 
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            checkboxSelection
          />
          
          
        </div>
        
    </>
  )
}

export default ManagerUsers