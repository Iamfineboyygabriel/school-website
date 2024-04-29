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
  const subject = sessionStorage.getItem("subjectId");
  console.log("subject id before request", subject);
  const urlWithParams =
    process.env.REACT_APP_API_URL + `/lesson/create-lesson/${subject}`;

  return await axios
    .post(urlWithParams, body, {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data;
    });
};

//modified thi endpoint to upload file and collect the corresponding url from the response
//also pa content type as an argument to authHeader to be added to the heaer for file upload
const UploadLesson = async (file) => {
  const urlWithParams = process.env.REACT_APP_API_URL + `/lesson/upload-lesson`;

  return await axios
    .post(urlWithParams, file, {
      headers: authHeader({ "Content-Type": "multipart/form-data" }),
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
