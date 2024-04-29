import axios from "axios";
import authHeader from "./headers";

const API_URL_GET_ADMIN_ALL_LESSONS =
  process.env.REACT_APP_API_URL + "/lesson/get-all-lessons";

const API_URL_GET_UPLOADED_ITEMS =
  process.env.REACT_APP_API_URL + "/uploads/:filename";

export const GetAllLessons = async () => {
  return await axios({
    url: API_URL_GET_ADMIN_ALL_LESSONS,
    headers: authHeader(),
    method: "get",
  }).then((response) => {
    return { ...response.data };
  });
};
export const GetUploadedItems = async (filename) => {
  try {
    const url = API_URL_GET_UPLOADED_ITEMS.replace(":filename", filename);
    const response = await axios({
      url: url,
      headers: authHeader(),
      method: "get",
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getAllLessonsService = {
  GetAllLessons,
  GetUploadedItems,
};

export default getAllLessonsService;
