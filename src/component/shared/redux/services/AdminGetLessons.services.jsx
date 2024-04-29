import axios from "axios";
import authHeader from "./headers";

const API_URL_GET_ADMIN_ALL_LESSONS =
  process.env.REACT_APP_API_URL + "/lesson/get-all-lessons";

const API_URL_GET_ADMIN_ALL_SUBJECTS =
  process.env.REACT_APP_API_URL + "/subject/student-subjects";

export const GetAllLessons = async () => {
  return await axios({
    url: API_URL_GET_ADMIN_ALL_LESSONS,
    headers: authHeader(),
    method: "get",
  }).then((response) => {
    return { ...response.data };
  });
};

export const GetAllSubjects = async () => {
  return await axios({
    url: API_URL_GET_ADMIN_ALL_SUBJECTS,
    headers: authHeader(),
    method: "get",
  }).then((response) => {
    return response.data;
  });
};

const getAllLessonsService = {
  GetAllLessons,
  GetAllSubjects,
};

export default getAllLessonsService;
