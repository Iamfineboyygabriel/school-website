import Axios from "axios";
import authHeader from "./headers";

const API_URL_GET_STUDENT_PROFILE =
  process.env.REACT_APP_API_URL + "/student/profile";

export const getStudentProfile = async () => {
  return await Axios({
    url: API_URL_GET_STUDENT_PROFILE,
    headers: authHeader(),
    method: "get",
  }).then((response) => {
    const adminData = response.data.data.token;
    sessionStorage.setItem("adminData", adminData);
    console.log("admin", adminData);
    console.log("profile", response.data);
    return { ...response.data, adminData }; // Return adminData along with other data
  });
};

const studentProfileService = {
  getStudentProfile,
};

export default studentProfileService;
