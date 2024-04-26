import axios from "axios";
import authHeader from "./headers";

const API_BASE_URL = process.env.REACT_APP_API_URL;
const API_URL_GET_CLASS_SUBJECTS = API_BASE_URL + "/subject/subjects/:class_name";

export const GetClassSubjects = async (class_name) => {
  try {
    const url = API_URL_GET_CLASS_SUBJECTS.replace(":class_name", class_name);
    const response = await axios({
      url: url,
      headers: authHeader(),
      method: "get",
    });
    const adminData = response.data.data.token;
    return { subjects: response.data, token: adminData };
  } catch (error) {
    throw error;
  }
};

const classSubjectsService = {
  GetClassSubjects,
};

export default classSubjectsService;

