import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {
  Category,
  ChangePassword,
  ChangePasswordAdmin,
  Director,
  EditProfile,
  Favourite,
  FeedBack,
  Films,
  Forget,
  ForgetAdmin,
  Loading,
  Modal,
  NewDirector,
  NewFilm,
  NewUser,
  NotFound,
  Profile,
  ProfileGate,
  Rating,
  Register,
  Reset,
  ResetAdmin,
  PrivateRouterAuth,
  PrivateRouter,
} from "./imports/index";
import {
  Admin,
  Home,
  Login,
  LoginAdmin,
  ProfileAdmin,
  Welcome,
} from "./imports/LazyRouter";
function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <ToastContainer position="top-center" />
        <Routes>
          {/* User */}
          <Route element={<PrivateRouterAuth />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<PrivateRouterAuth />}>
            <Route path="/customer/password/reset/:token" element={<Reset />} />
          </Route>
          <Route element={<PrivateRouterAuth />}>
            <Route path="/signup" element={<Register />} />
          </Route>
          <Route element={<PrivateRouterAuth />}>
            <Route path="/forget" element={<Forget />} />
          </Route>
          <Route element={<PrivateRouter />}>
            <Route path="/" element={<Welcome />} />
          </Route>
          <Route element={<PrivateRouter />}>
            <Route path="/browse" element={<ProfileGate />} />
          </Route>
          <Route element={<PrivateRouter />}>
            <Route path="/home" element={<Home />} />
          </Route>
          <Route element={<PrivateRouter />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route element={<PrivateRouter />}>
            <Route path="/profile/edit" element={<EditProfile />} />
          </Route>
          <Route element={<PrivateRouter />}>
            <Route
              path="/profile/ChangePassword"
              element={<ChangePassword />}
            />
          </Route>
          <Route element={<PrivateRouter />}>
            <Route path="/feedback" element={<FeedBack />} />
          </Route>

          {/* ADMIN */}
          <Route path="/loginadmin" element={<LoginAdmin />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/forgetadmin" element={<ForgetAdmin />} />
          <Route path="/profileadmin" element={<ProfileAdmin />} />
          <Route path="/password/reset/:token" element={<ResetAdmin />} />
          <Route path="/changepassword/" element={<ChangePasswordAdmin />} />
          <Route path="/director" element={<Director />} />
          <Route path="/newUser/:tokens" element={<NewUser />} />
          <Route path="/newDirector" element={<NewDirector />} />
          <Route path="/category" element={<Category />} />
          <Route path="/film" element={<Films />} />
          <Route path="/newFilm" element={<NewFilm />} />
          <Route path="/newFilm:tokens" element={<NewFilm />} />
          <Route path="/rating" element={<Rating />} />
          <Route path="/favourite" element={<Favourite />} />
          {/* Shared */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      {/* <Modal/> */}
    </>
  );
}

export default App;
