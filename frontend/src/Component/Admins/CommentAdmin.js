import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { TopBar, SideBarAdmins } from "../../imports/importAdmin/importsAdmin";
import { GlobalStyleAmin } from "../../Style/Admin/GlobalStyleAmin";
import { GlobalStateAdmin } from "../../ContextsAdmin/GlobalStateAdmin";
import { CommentAdminStyle } from "../../Style/Admin/CommentAdminStyle";
import { useDispatch, useSelector } from "react-redux";
import { DeleteOutline } from "@material-ui/icons";
import moment from "moment";
import "moment/locale/vi";
import { useContext } from "react";
import { useEffect } from "react";
import { CommentOfFilmInitiate, GetAllCommentInitiate } from "../../Redux/Action/ActionFilmAdmin";
const CommentAdmin = () => {
  const dispatch = useDispatch();
  const { allComments,CommentsOfFilm } = useSelector((state) => state.film);
  const state = useContext(GlobalStateAdmin);
  const { token } = useSelector((state) => state.admin);
  const [callback, setCallback] = state.callback;

  const handleWatchCommentFilm = (id) => {
    dispatch(CommentOfFilmInitiate(token.accessToken,id))
  }
  const img =
  "https://png.pngtree.com/png-clipart/20190924/original/pngtree-businessman-user-avatar-free-vector-png-image_4827807.jpg";
  useEffect(() => {
    setCallback(true);
    dispatch(GetAllCommentInitiate(token.accessToken));
  }, [callback, token]);
  const columns = [
    { field: "_id", headerName: "ID", width: 150 },

    {
      field: "UserName",
      headerName: "UserName",
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
      field: "Comments",
      headerName: "Comments",
      width: 200,
      renderCell: (params) => {
        return <div className="productListItem">
       
          {params.row.content}</div>;
      },
    },
    {
      field: "title",
      headerName: " Film",
      width: 300,
      renderCell: (params) => {
        return <div className="productListItem" onClick={()=>handleWatchCommentFilm(params?.row?.film._id)}>
                      <img
              className="productListImg"
              src={params.row.film.image_film.url || img}
              alt=""
            />
          {params.row.film.title}
          </div>;
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
    //           onClick={() => handleDelete(params.row.id)}
    //         />
    //       </>
    //     );
    //   },
    // },
  ];
  const columnsCommentsFilm= [
    { field: "_id", headerName: "ID", width: 150 },
    // {
    //   field: "title",
    //   headerName: " Film",
    //   width: 300,
    //   renderCell: (params) => {
    //     return <div className="productListItem" onClick={()=>handleWatchCommentFilm(params?.row?.film._id)}>
    //                   <img
    //           className="productListImg"
    //           src={params.row.film.image_film.url || img}
    //           alt=""
    //         />
    //       {params.row.film.title}
    //       </div>;
    //   },
    // },
    {
      field: "UserName",
      headerName: "UserName",
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
      field: "Comments",
      headerName: "Comments",
      width: 200,
      renderCell: (params) => {
        return <div className="productListItem">
       
          {params.row.content}</div>;
      },
    },
    // {
    //   field: "title",
    //   headerName: " Film",
    //   width: 300,
    //   renderCell: (params) => {
    //     return <div className="productListItem" onClick={()=>handleWatchCommentFilm(params?.row?.film._id)}>
    //                   <img
    //           className="productListImg"
    //           src={params.row.film.image_film.url || img}
    //           alt=""
    //         />
    //       {params.row.film.title}
    //       </div>;
    //   },
    // },
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
    //           onClick={() => handleDelete(params.row.id)}
    //         />
    //       </>
    //     );
    //   },
    // },
  ];
  return (
    <>
      <GlobalStyleAmin />
      <TopBar />
      <div className="admin__container">
        <SideBarAdmins />
        <>
          <CommentAdminStyle />
          <div className="productList">
            <DataGrid
              getRowId={(r) => r._id}
              rows={allComments}
              disableSelectionOnClick
              columns={columns}
              pageSize={8}
              checkboxSelection
            />
            {CommentsOfFilm && (
              <>
              <h2> Comment of Film Hotel Del Luna</h2>
            <DataGrid
              getRowId={(r) => r._id}
              rows={CommentsOfFilm}
              disableSelectionOnClick
              columns={columnsCommentsFilm}
              pageSize={8}
              checkboxSelection
            />
              </>
            )}
          </div>
        </>
      </div>
    </>
  );
};

export default CommentAdmin;
