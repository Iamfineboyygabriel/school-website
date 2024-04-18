import React from "react";
import { Route, Routes } from "react-router-dom";
import StudentSideBar from "./StudentSideBar";
import StudentDashboard from "../../../dashboard/student/StudentDashboard";
import UserProfile from "../../student/UserProfile";

const StudentSideBarRoute = () => {
  return (
    <StudentSideBar>
      <Routes>
        <Route
          path="/dashboard/student-dashboard"
          element={<StudentDashboard />}
        />
        <Route path="my-profile" element={<UserProfile />} />
        <Route path="*" element={<StudentDashboard />} />
      </Routes>
    </StudentSideBar>
  );
};

export default StudentSideBarRoute;
