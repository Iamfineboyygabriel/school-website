import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/home/Home";
import StudentLogin from "./component/login/student/StudentLogin";
import Register from "./component/dashboard/student/registration/Register.jsx";
import StudentSideBarRoute from "./component/dashboard/layout/studentlayout/StudentSideBarRoute";
import StudentResetPassword from "./component/login/student/StudentResetPassword.jsx";
import AdminResetPassword from "./component/login/admin/AdminResetPassword.jsx";
import Admin from "./component/dashboard/admin/Admin.jsx";
import AdminLoginPage from "./component/login/admin/AdminLoginPage.jsx";
import PasswordChange from "./component/login/student/PasswordChange.jsx";
import Upload from "./component/dashboard/admin/upload/Upload.jsx";
import AddSubject from "./component/dashboard/admin/AddSubject.jsx";
import GetClassSubject from "./component/dashboard/admin/GetClassSubject.jsx";
import AddStudentLesson from "./component/dashboard/admin/AddStudentLesson.jsx";
import AllLesson from "./component/dashboard/admin/AllLesson.jsx";
import SchemeOfWork from "./component/dashboard/student/SchemeOfWork.jsx";
import UploadLessonComponent from "./component/dashboard/admin/upload/UploadLessonComponent.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/admin-login" element={<AdminLoginPage />} />
        <Route path="/*" element={<StudentSideBarRoute />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/add-subject" element={<AddSubject />} />
        <Route path="/upload-lesson" element={<UploadLessonComponent />} />
        <Route path="/class-subjects" element={<GetClassSubject />} />
        <Route path="/add-lesson" element={<AddStudentLesson />} />
        <Route path="/scheme-of-work" element={<SchemeOfWork />} />

        <Route path="/all-lesson" element={<AllLesson />} />

        <Route path="/change-password" element={<PasswordChange />} />
        <Route path="/admin-reset-password" element={<AdminResetPassword />} />
        <Route
          path="/student-reset-password"
          element={<StudentResetPassword />}
        />
      </Routes>
    </Router>
  );
}

export default App;
