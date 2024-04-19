// registeredStudentService.js
import axios from "axios";
import authHeader from "./headers";

const API_URL_GET_ALL_REGISTERED_STUDENTS =
  process.env.REACT_APP_API_URL + "/registration/get-registered-students";

export const GetRegisteredStudents = async () => {
  return await axios({
    url: API_URL_GET_ALL_REGISTERED_STUDENTS,
    headers: authHeader(),
    method: "get",
  }).then((response) => {
    return response.data;
  });
};

const registeredStudentService = {
  GetRegisteredStudents,
};

export default registeredStudentService;
