import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Navigate, Outlet, useLocation } from "react-router-dom";
import Header from "../Header";

import VerticalMenu from "../Sidebar/VerticalMenu";

function ProtectedRoute() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const location = useLocation();
  return (
    <>
      {isLoggedIn ? (
        <>
          <Header />
          <VerticalMenu />
          <Outlet />
        </>
      ) : (
        <Navigate to="/login" state={{ from: location }} replace />
      )}
    </>
  );
}

export default ProtectedRoute;
