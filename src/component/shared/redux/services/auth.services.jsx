import axios from "axios";
import authHeader from "./headers";
//API TO REGISTER AS AN ADMIN WHICH IS NOT USEFUL FOR NOW
const API_URL_ADMIN_REGISTER =
  process.env.REACT_APP_API_URL + "/admin/register";

//API TO LOG IN AS AN ADMIN
const API_URL_ADMIN_LOGIN = process.env.REACT_APP_API_URL + "/admin/login";

//API FOR ADMIN TO APPROVE A STUDNT
const API_URL_ADMIN_APPROVE_STUDENT =
  process.env.REACT_APP_API_URL + "/student/create-student";

//API TO FIX FORGET PASSWORD AS AN ADMIN
const API_URL_ADMIN_FORGET_PASSWORD =
  process.env.REACT_APP_API_URL + "/admin/forget-password";

//API FOR STUDENT TO CREATE AN ACCOUNT
const API_URL_STUDENT_REGISTER =
  process.env.REACT_APP_API_URL + "/registration/register-student";

//API TO LOGIN AS A STUDENT AFTER ADMIN APROVE
const API_URL_STUDENT_LOGIN = process.env.REACT_APP_API_URL + "/student/login";

//API FOR STUDENT TO CHANGE PASSWORD PATCH REQUEST
// const API_URL_STUDENT_CHANGE_PASSWORD= process.env.REACT_APP_API_URL + ""

//API TO FIX FORGET PASSWORD FOR STUDENT
const API_URL_STUDENT_FORGET_PASSWORD =
  process.env.REACT_APP_API_URL + "/forget-password";

/*AUTH SERVICE TO ADD AN ADMIN*/
const AddAnAdmin = async (body) => {
  return await axios
    .post(API_URL_ADMIN_REGISTER, body, {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data;
    });
};

/**AUTH FOR ADMIN LOGIN POST */
const LoginAdmin = async (body) => {
  return await axios
    .post(API_URL_ADMIN_LOGIN, body, {
      headers: authHeader(),
    })
    .then((response) => {
      const adminData = response.data.data.token;
      sessionStorage.setItem("adminData", adminData);
      console.log("here", response.data);
      return { ...response.data, adminData }; // Return adminData along with other data
    });
};

/**AUTH SERVICES FOR ADMIN TO APRROVE A STUDENT ADMISSION */
const AdminApprove = async (body) => {
  return await axios
    .post(API_URL_ADMIN_APPROVE_STUDENT, body, {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data;
    });
};

/**AUTH FOR ADMIN FORGET PASSWORD */
const AdminForget = async (body) => {
  return await axios
    .post(API_URL_ADMIN_FORGET_PASSWORD, body, {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data;
    });
};

/*STUDENT REGISTRATION*/
const AddStudent = async (body) => {
  return await axios
    .post(API_URL_STUDENT_REGISTER, body, {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data;
    });
};

/*STUDENT LOGIN*/
/**AUTH SERVICES FOR STUDENT LOGIN */
const StudentLogin = async (body) => {
  return await axios
    .post(API_URL_STUDENT_LOGIN, body, {
      headers: authHeader(),
    })
    .then((response) => {
      const studentData = response.data.data.token; // Assuming the token is returned in the 'token' field of the response
      sessionStorage.setItem("studentData", studentData); // Store the student token in sessionStorage
      console.log("here", response.data);
      return { ...response.data, studentData }; // Return studentData along with other data
    });
};


/**STUDENT FORGET PASSWORD */
const ForgetStudentPassword = async (body) => {
  return await axios
    .post(API_URL_STUDENT_FORGET_PASSWORD, body, {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data;
    });
};

const AuthServices = {
  AddAnAdmin,
  LoginAdmin,
  AdminForget,
  AddStudent,
  StudentLogin,
  ForgetStudentPassword,
  AdminApprove,
};

export default AuthServices;
