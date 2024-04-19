import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/auth.slices";
//remove the curly braces if any error
import registeredStudentSlice from "./slices/registeredStudent.slices";
import studentProfileSlice from "./slices/getProfile.slices";

const rootReducer = combineReducers({
  auth: authReducer,
  student: studentProfileSlice,
  registration: registeredStudentSlice,
});

export default rootReducer;
