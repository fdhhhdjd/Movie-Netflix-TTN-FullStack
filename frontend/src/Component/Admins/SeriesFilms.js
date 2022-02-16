// import React, { useState, useContext, useEffect } from "react";
// import { SeriesFilmss } from "../../Style/Admin/SeriesFilms";
// import { GlobalStateAdmin } from "../../ContextsAdmin/GlobalStateAdmin";
// import { useNavigate, useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import axios from "axios";
// import swal from "sweetalert";
// import { toast } from "react-toastify";
// const SeriesFilms = () => {
//   const { seriesFilm } = useSelector((state) => state.film);
//   const { token } = useSelector((state) => state.admin);
//   const state = useContext(GlobalStateAdmin);
//   const [callback, setCallback] = state.callback;
//   const [seriesFilms, setSeriesFilms] = useState('');
//   const [onEdit, setOnEdit] = useState(false);
//   const [id, setID] = useState("");
//   const navigate = useNavigate();
//   console.log(seriesFilm,'seriesFilm')
//   const createSeriesFilm = async (e) => {
//     e.preventDefault();
//     try {
//       if (onEdit) {
//         const res = await axios.put(
//           `/api/seriesFilm/update/${id}`,
//           { name: seriesFilms },
//           {
//             headers: {
//               Authorization: `${token.accessToken}`,
//             },
//           }
//         );
//         setOnEdit(false);
//         setSeriesFilms("");
//         swal(`${res.data.msg} 🤩`, {
//           icon: "success",
//         });
//       } else {
//         const res = await axios.post(
//           "/api/seriesFilm/add",
//           { name: seriesFilms },
//           {
//             headers: {
//               Authorization: `${token.accessToken}`,
//             },
//           }
//         );
//         swal(`${res.data.msg} 🤩`, {
//           icon: "success",
//         });
//         setSeriesFilms("");
//       }
//       setCallback(!callback);
    
//     } catch (error) {
//       alert(error.response.data.msg);
//     }
//   };
//   const deleteSeriesFilm = async (id) => {
//     try {
//       return await swal({
//         title: "Are you sure you want delete ?",
//         icon: "warning",
//         buttons: true,
//         dangerMode: true,
//       }).then((willDelete) => {
//         if (willDelete) {
//           axios.delete(`/api/seriesFilm/delete/${id}`, {
//             headers: {
//               Authorization: ` ${token.accessToken}`,
//             },
//           });
//           swal("Delete successfully, wait Loading... 😉 !", {
//             icon: "success",
//           });
//           setCallback(!callback);
//         } else {
//           swal("Thank you for 😆'!");
//         }
//       });
//     } catch (err) {
//       swal("Oh no lucky Thank you for 🥴!");
//     }
//   };
//   const editSeriesFilm = async (_id, name) => {
//     setID(_id);
//     setSeriesFilms(name);
//     setOnEdit(true);
//   };
//   return (
//     <>
//       <SeriesFilmss />
//       <div className="categories">
//         <form onSubmit={createSeriesFilm}>
//           <label htmlFor="category">SeriesFilms</label>
//           <input
            
//             type="text"
//             name="name"
//             value={seriesFilms}
//             required
//             onChange={(e) => setSeriesFilms(e.target.value)}
//           />

//           <button type="submit">{onEdit ? "Update" : "Create"}</button>
//         </form> 
  
//         <div className="col">
//           {seriesFilm.map((seriesfilm) => (
//             <div className="row" key={seriesfilm._id}>
//               <div className="animated">
//                 <span className='scrolling'>{seriesfilm.name}</span>
//               </div>
              


//               <div>
//                 <button
//                   onClick={() => editSeriesFilm(seriesfilm._id, seriesfilm.name)}
//                 >
//                   Edit
//                 </button>
//                 <button onClick={() => deleteSeriesFilm(seriesfilm._id)}>
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default SeriesFilms