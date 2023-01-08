import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Navigate, Outlet } from "react-router-dom";
import Header from "../Header";
import VerticalMenu from "../Sidebar/VerticalMenu";

function ProtectedRoute() {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <>
      {isLoggedIn ? (
        <>
          <Header />
          <VerticalMenu />
          <Outlet />
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}

export default ProtectedRoute;
