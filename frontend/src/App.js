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
  UserRoute,
  UserRoutes,
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
          <Route
            path="/login"
            element={
              <UserRoutes>
                <Login />
              </UserRoutes>
            }
          />
          <Route
            path="/customer/password/reset/:token"
            element={
              <UserRoutes>
                <Reset />
              </UserRoutes>
            }
          />
          <Route
            path="/signup"
            element={
              <UserRoutes>
                <Register />
              </UserRoutes>
            }
          />
          <Route
            path="/forget"
            element={
              <UserRoutes>
                <Forget />
              </UserRoutes>
            }
          />
          <Route
            path="/"
            element={
              <UserRoutes>
                <Welcome />
              </UserRoutes>
            }
          />
          <Route
            path="/home"
            element={
              <UserRoute>
                <Home />
              </UserRoute>
            }
          />
          <Route
            path="/home/:id"
            element={
              <UserRoute>
                <Home />
              </UserRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <UserRoute>
                <Profile />
              </UserRoute>
            }
          />
          <Route
            path="/profile/edit"
            element={
              <UserRoute>
                <EditProfile />
              </UserRoute>
            }
          />
          <Route
            path="/profile/ChangePassword"
            element={
              <UserRoute>
                <ChangePassword />
              </UserRoute>
            }
          />
          <Route
            path="/feedback"
            element={
              <UserRoute>
                <FeedBack />
              </UserRoute>
            }
          />
          <Route
            path="/browse"
            element={
              <UserRoute>
                <ProfileGate />
              </UserRoute>
            }
          />
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
    </>
  );
}

export default App;
