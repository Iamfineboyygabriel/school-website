import axios from "axios";
import authHeader from "./headers";

const API_URL_GET_STUDENT_LESSONS =
  process.env.REACT_APP_API_URL + "/lesson/get-student-lessons";

export const GetStudentLessons = async () => {
  try {
    const response = await axios({
      url: API_URL_GET_STUDENT_LESSONS,
      headers: authHeader(),
      method: "get",
    });
    const studentData = response.data.data.token;
    sessionStorage.setItem("StudentData", studentData);
    console.log("Student Lessons Data:", response.data);
    return { ...response.data, studentData };
  } catch (error) {
    console.error("Error fetching student lessons:", error);
    throw error;
  }
};

const getStudentLessonsService = {
  GetStudentLessons,
};

export default getStudentLessonsService;
