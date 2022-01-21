import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Loading, NotFound, Register, Forget, Reset } from "./imports/index";
import { Home, Welcome, Login } from "./imports/LazyRouter";
function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <ToastContainer position="top-center" />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/reset/:id" element={<Reset />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
