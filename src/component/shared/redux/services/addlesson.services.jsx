import axios from "axios";
import authHeader from "./headers";

// API TO POST LESSON FOR STUDENT ...ADMIN
const API_URL_ADMIN_ADD_LESSON =
  process.env.REACT_APP_API_URL + "/lesson/create-lesson/:subject_id";

const API_URL_UPLOAD_LESSON =
  process.env.REACT_APP_API_URL + "/lesson/upload-lesson/:lesson_id";

const subjectId = sessionStorage.getItem("subjectId");
const lessonId = sessionStorage.getItem("lessonId");

console.log("subject", subjectId);
console.log("lesson", lessonId);

const AdminAddLesson = async (body) => {
  const urlWithParams =
    process.env.REACT_APP_API_URL + `/lesson/create-lesson/${subjectId}`;

  return await axios
    .post(urlWithParams, body, {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data;
    });
};

const UploadLesson = async (body) => {
  const urlWithParams =
    process.env.REACT_APP_API_URL + `/lesson/upload-lesson/${lessonId}`;

  return await axios
    .post(urlWithParams, body, {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data;
    });
};

const AddLessonServices = {
  AdminAddLesson,
  UploadLesson,
};

export default AddLessonServices;

