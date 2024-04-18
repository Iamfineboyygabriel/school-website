import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/home/Home";
import StudentLogin from "./component/login/student/StudentLogin";
import Register from "./component/dashboard/student/registration/Register.jsx";
import StudentSideBarRoute from "./component/dashboard/layout/studentlayout/StudentSideBarRoute";
import PageNotFound from "./component/pagenotfound/PageNotFound.jsx";

// For JSS1
import JSS1FirstTermPage from "./component/classes/jss1/jss1FirstTerm";
import JSS1SecondTermPage from "./component/classes/jss1/jss1SecondTerm";
import JSS1ThirdTermPage from "./component/classes/jss1/jss1ThirdTerm";
// For JSS2
import JSS2FirstTermPage from "./component/classes/jss2/jss2FirstTerm";
import JSS2SecondTermPage from "./component/classes/jss2/jss2SecondTerm";
import JSS2ThirdTermPage from "./component/classes/jss2/jss2ThirdTerm";
// For JSS3
import JSS3FirstTermPage from "./component/classes/jss3/jss3FirstTerm";
import JSS3SecondTermPage from "./component/classes/jss3/jss3SecondTerm";
import JSS3ThirdTermPage from "./component/classes/jss3/jss3ThirdTerm";
// For SS1
import SS1FirstTermPage from "./component/classes/ss1/ss1FirstTerm";
import SS1SecondTermPage from "./component/classes/ss1/ss1SecondTerm";
import SS1ThirdTermPage from "./component/classes/ss1/ss1ThirdTerm";
// For SS2
import SS2FirstTermPage from "./component/classes/ss2/ss2FirstTerm";
import SS2SecondTermPage from "./component/classes/ss2/ss2SecondTerm";
import SS2ThirdTermPage from "./component/classes/ss2/ss2ThirdTerm";

// For SS3
import SS3FirstTermPage from "./component/classes/ss3/ss3FirstTerm";
import SS3SecondTermPage from "./component/classes/ss3/ss3SecondTerm";
import SS3ThirdTermPage from "./component/classes/ss3/ss3ThirdTerm";

//View content file
import Audio from "./component/classes/tableofcontents/view/Audio";
import Video from "./component/classes/tableofcontents/view/Video.jsx";
import Text from "./component/classes/tableofcontents/view/Text.jsx";

import SchemeOfWork from "./component/classes/tableofcontents/Schemeofwork";
import Admin from "./component/dashboard/admin/Admin.jsx";
import AdminLoginPage from "./component/login/admin/AdminLoginPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-login" element={<AdminLoginPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<StudentSideBarRoute />} />
        {/*ROUTES FOR CLASSES */}
        {/**JSS1 */}
        <Route path="/jss1/first-term" element={<JSS1FirstTermPage />} />
        <Route path="/jss1/second-term" element={<JSS1SecondTermPage />} />
        <Route path="/jss1/third-term" element={<JSS1ThirdTermPage />} />
        {/**JSS2 */}
        <Route path="/jss2/first-term" element={<JSS2FirstTermPage />} />
        <Route path="/jss2/second-term" element={<JSS2SecondTermPage />} />
        <Route path="/jss2/third-term" element={<JSS2ThirdTermPage />} />
        {/**JSS3 */}
        <Route path="/jss3/first-term" element={<JSS3FirstTermPage />} />
        <Route path="/jss3/second-term" element={<JSS3SecondTermPage />} />
        <Route path="/jss3/third-term" element={<JSS3ThirdTermPage />} />
        {/**SS1 */}
        <Route path="/ss1/first-term" element={<SS1FirstTermPage />} />
        <Route path="/ss1/second-term" element={<SS1SecondTermPage />} />
        <Route path="/ss1/third-term" element={<SS1ThirdTermPage />} />
        {/**SS2 */}
        <Route path="/ss2/first-term" element={<SS2FirstTermPage />} />
        <Route path="/ss2/second-term" element={<SS2SecondTermPage />} />
        <Route path="/ss2/third-term" element={<SS2ThirdTermPage />} />
        {/**SS3 */}
        <Route path="/ss3/first-term" element={<SS3FirstTermPage />} />
        <Route path="/ss3/second-term" element={<SS3SecondTermPage />} />
        <Route path="/ss3/third-term" element={<SS3ThirdTermPage />} />
        <Route
          path="/scheme-of-work/:classGrade/:term/:subject"
          element={<SchemeOfWork />}
        />
        <Route
          path="/audio/:classGrade/:term/:subject/:topic"
          element={<Audio />}
        />
        <Route
          path="/video/:classGrade/:term/:subject/:topic"
          element={<Video />}
        />
        <Route
          path="/text/:classGrade/:term/:subject/:topic"
          element={<Text />}
        />
        <Route path="*" component={PageNotFound} />
      </Routes>
    </Router>
  );
}

export default App;
