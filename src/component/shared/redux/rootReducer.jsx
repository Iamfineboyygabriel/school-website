import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/auth.slices";
import registeredStudentSlice from "./slices/registeredStudent.slices";
import studentProfileSlice from "./slices/GetStudentProfile.slices";

const rootReducer = combineReducers({
  auth: authReducer,
  student: studentProfileSlice,
  registration: registeredStudentSlice,
});

export default rootReducer;
