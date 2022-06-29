import { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {
  Category,
  ChangeDirector,
  ChangePasswordAdmin,
  Director,
  Directors,
  EditProfile,
  Favourite,
  FeedBack,
  Films,
  Forget,
  ForgetAdmin,
  Loading,
  Login,
  Movie,
  NewDirector,
  NewFilm,
  NewUsers,
  PrivateRouter,
  PrivateRouterAuth,
  Profile,
  Rating,
  Register,
  Reset,
  ResetAdmin,
  Users,
  Watch,
  FavouriteAdmin,
} from "./imports/index";
import {
  Admin,
  Home,
  Information,
  LoginAdmin,
  NotFound,
  ProfileAdmin,
  ProfileGate,
  Welcome,
} from "./imports/LazyRouter";
import PrivateRouterAdmin from "./Page/PrivateRouterUser/PrivateRouterAdmin";
import PrivateAdmin from "./Page/PrivateRouterUser/PrivateAdmin";
function App() {
  const { profile } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (profile?.adult === "" || profile?.password === "null") {
      navigate("/browse");
    }
  }, [profile]);
  return (
    <>
      <Suspense fallback={<Loading />}>
        <ToastContainer position="top-center" />
        <Routes>
          {/* ********* User ********* */}
          {/* Login */}
          <Route element={<PrivateRouterAuth />}>
            <Route path="/login" element={<Login />} />
          </Route>
          {/* ResetPassword */}
          <Route element={<PrivateRouterAuth />}>
            <Route path="/customer/password/reset/:token" element={<Reset />} />
          </Route>
          {/* Register */}
          <Route element={<PrivateRouterAuth />}>
            <Route path="/signup" element={<Register />} />
          </Route>
          {/* Forget Password */}
          <Route element={<PrivateRouterAuth />}>
            <Route path="/forget" element={<Forget />} />
          </Route>
          {/* Intro Web  */}
          {/* <Route element={<PrivateRouter />}> */}
          <Route path="/" element={<Welcome />} />
          {/* </Route> */}
          {/* Choose Adult  */}
          <Route element={<PrivateRouter />}>
            <Route path="/browse" element={<ProfileGate />} />
          </Route>
          {/* Home   */}
          <Route element={<PrivateRouter />}>
            <Route path="/home" element={<Home />} />
          </Route>
          <Route element={<PrivateRouter />}>
            <Route path="/information" element={<Information />} />
          </Route>
          <Route element={<PrivateRouter />}>
            <Route path="/movies" element={<Movie />} />
          </Route>
          {/* Watch */}
          <Route element={<PrivateRouter />}>
            <Route path="/watch/:id" element={<Watch />} />
          </Route>
          {/* Profile User   */}
          <Route element={<PrivateRouter />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          {/* Change profile */}
          <Route element={<PrivateRouter />}>
            <Route path="/profile/edit" element={<EditProfile />} />
          </Route>
          {/* Change Password  */}
          <Route element={<PrivateRouter />}>
            <Route path="/profile/ChangePassword" element={<Information />} />
          </Route>
          {/* FeedBack */}
          <Route element={<PrivateRouter />}>
            <Route path="/feedback" element={<FeedBack />} />
          </Route>
          <Route element={<PrivateRouter />}>
            <Route path="/favourite" element={<Favourite />} />
          </Route>
          <Route element={<PrivateRouter />}>
            <Route path="/directors" element={<Directors />} />
          </Route>

          {/* ********* ADMIN ********* */}
          {/* Login Admin */}
          <Route element={<PrivateRouterAdmin />}>
            <Route path="/loginadmin" element={<LoginAdmin />} />
          </Route>
          {/* Home Admin */}
          <Route element={<PrivateAdmin />}>
            <Route path="/admin" element={<Admin />} />
          </Route>
          {/* Forget Password Admin */}
          <Route path="/forgetadmin" element={<ForgetAdmin />} />
          {/* Profile Admin */}
          <Route element={<PrivateAdmin />}>
            <Route path="/profileadmin" element={<ProfileAdmin />} />
          </Route>
          {/* Reset Password Admin */}
          <Route path="/password/reset/:token" element={<ResetAdmin />} />
          {/* Change Password Admin */}
          <Route element={<PrivateAdmin />}>
            <Route path="/changepassword/" element={<ChangePasswordAdmin />} />
          </Route>
          {/* Manager Director */}
          <Route element={<PrivateAdmin />}>
            <Route path="/users" element={<Users />} />
          </Route>

          <Route element={<PrivateAdmin />}>
            <Route path="/newusers/:tokens" element={<NewUsers />} />
          </Route>

          <Route element={<PrivateAdmin />}>
            <Route path="/director" element={<Director />} />
          </Route>
          {/* Edit Film */}
          <Route element={<PrivateAdmin />}>
            <Route
              path="/changeDirector/:tokens"
              element={<ChangeDirector />}
            />
          </Route>
          {/* Add Director */}
          <Route element={<PrivateAdmin />}>
            <Route path="/newDirector" element={<NewDirector />} />
          </Route>
          {/* Manager Category */}
          <Route element={<PrivateAdmin />}>
            <Route path="/category" element={<Category />} />
          </Route>
          {/* Manager Film */}
          <Route element={<PrivateAdmin />}>
            <Route path="/film" element={<Films />} />
          </Route>
          {/* Add Film */}
          <Route element={<PrivateAdmin />}>
            <Route path="/newFilm" element={<NewFilm />} />
          </Route>
          {/* Edit Film */}
          <Route element={<PrivateAdmin />}>
            <Route path="/newFilm:tokens" element={<NewFilm />} />
          </Route>
          {/* Rating for Film */}
          <Route element={<PrivateAdmin />}>
            <Route path="/rating" element={<Rating />} />
          </Route>
          {/* Favourite */}
          <Route element={<PrivateAdmin />}>
            <Route path="/favouriteadmin" element={<FavouriteAdmin />} />
          </Route>
          {/* Shared */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}
export default App;
