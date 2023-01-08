import React from "react";

import { Navigate } from "react-router-dom";

function UnauthorizedComponent() {
  return <Navigate to="/login" />;
}

export default UnauthorizedComponent;
