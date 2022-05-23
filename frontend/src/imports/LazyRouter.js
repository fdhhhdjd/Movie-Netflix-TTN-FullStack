import React, { lazy } from "react";

//!Authentication User
export const Login = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../Page/Authentication/Login")), 1000);
  });
});

//!Page main User
export const Home = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../Page/Home/Home")), 2000);
  });
});
export const ProfileGate = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../Page/ProfileGate/ProfileGate")), 2000);
  });
});
export const Welcome = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../Page/Welcome/Welcome")), 2000);
  });
});
export const Watch = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../Page/Watch/Watch")), 2000);
  });
});

//!Authentication Admin
export const LoginAdmin = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../Page/Admins/LoginAdmin")), 1000);
  });
});

//!Page Admin
export const Admin = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../Page/Admins/Admin")), 1000);
  });
});
export const ProfileAdmin = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../Page/Admins/ProfileAdmin")), 1000);
  });
});

//!Share
export const NotFound = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../Page/NotFound/NotFound")), 1000);
  });
});
export const Information = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import("../Page/Authentication/Information")),
      1000
    );
  });
});
