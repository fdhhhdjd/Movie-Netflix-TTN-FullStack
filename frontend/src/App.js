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
} from "./imports/index";
import { Home, Welcome, Login } from "./imports/LazyRouter";
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
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
