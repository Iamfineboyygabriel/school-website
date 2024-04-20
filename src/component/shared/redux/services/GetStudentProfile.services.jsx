import axios from "axios";
import authHeader from "./headers";

const API_URL_GET_STUDENT_PROFILE =
  process.env.REACT_APP_API_URL + "/student/profile";

export const GetStudentProfile = async () => {
  return await axios({
    url: API_URL_GET_STUDENT_PROFILE,
    headers: authHeader(),
    method: "get",
  }).then((response) => {
    const studentData = response.data.data.token;
    sessionStorage.setItem("StudentData", studentData);
    console.log("student", studentData);
    console.log("profile", response.data);
    return { ...response.data, studentData };
  });
};

const studentProfileService = {
  GetStudentProfile,
};

export default studentProfileService;
