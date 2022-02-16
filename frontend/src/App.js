import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {
  Loading,
  NotFound,
  Register,
  Forget,
  Reset,
  UserRoutes,
  UserRoute,
  FeedBack,
  Profile,
  EditProfile,
  ChangePassword,
  ForgetAdmin,
  ResetAdmin,
  ChangePasswordAdmin,
  Director,
  NewUser,
  NewDirector,
  Category,
  SeriesFilm,
  Films,
  NewFilm,
  Rating,
  Favourite
} from "./imports/index";
import { Home, Welcome, Login,LoginAdmin,Admin,ProfileAdmin,} from "./imports/LazyRouter";
function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <ToastContainer position="top-center" />
        <Routes>
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
          <Route path="*" element={<NotFound />} />
        
        {/* ADMIN */}
        <Route
            path="/loginadmin"
            element={
              
                <LoginAdmin />
              
            }
          />
        <Route
            path="/admin"
            element={
              
                <Admin />
              
            }
          />
        <Route
            path="/forgetadmin"
            element={
              
                <ForgetAdmin />
              
            }
          />
        <Route
            path="/profileadmin"
            element={
              
                <ProfileAdmin />
              
            }
          />
        <Route
            path="/password/reset/:token"
            element={
              
                <ResetAdmin />
              
            }
          />
        <Route
            path="/changepassword/"
            element={
              
                <ChangePasswordAdmin />
              
            }
          />
        <Route
            path="/director"
            element={
              
                <Director />
              
            }
          />
        <Route
            path="/newUser/:tokens"
            element={
              
                <NewUser />
              
            }
          />
        <Route
            path="/newDirector"
            element={
              
                <NewDirector />
              
            }
          />
        <Route
            path="/category"
            element={
              
                <Category />
              
            }
          />
        <Route
            path="/film"
            element={
              
                <Films />
              
            }
          />
        <Route
            path="/newFilm"
            element={
              
                <NewFilm />
              
            }
          />
        <Route
            path="/newFilm:tokens"
            element={
              
                <NewFilm />
              
            }
          />
        <Route
            path="/rating"
            element={
              
                <Rating />
              
            }
          />
        <Route
            path="/favourite"
            element={
              
                <Favourite />
              
            }
          />
        </Routes>

      </Suspense>
    </>
  );
}

export default App;
