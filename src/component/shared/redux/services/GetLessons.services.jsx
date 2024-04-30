import axios from "axios";
import authHeader from "./headers";

const API_URL_GET_STUDENT_LESSONS =
  process.env.REACT_APP_API_URL + "/lesson/get-student-lessons";

export const GetStudentLessons = async () => {
  try {
    const response = await axios.get(API_URL_GET_STUDENT_LESSONS, {
      headers: authHeader(),
    });
    console.log("Student Lessons Data:", response.data);
    const studentData = response.data.data.token;
    sessionStorage.setItem("studentData", studentData); 
    return response.data; // Return the lessons data directly
  } catch (error) {
    console.error("Error fetching student lessons:", error);
    throw error;
  }
};

const getStudentLessonsService = {
  GetStudentLessons,
};

export default getStudentLessonsService;
