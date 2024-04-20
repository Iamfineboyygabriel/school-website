import React from "react";
import { Route, Navigate } from "react-router-dom";
import StudentLogin from "../login/student/StudentLogin";

const ProtectedRoutes = ({ element: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      element={
        isAuthenticated ? (
          <StudentLogin />
        ) : (
          <Navigate to="/student-dashboard" />
        )
      }
    />
  );
};

export default ProtectedRoutes;
