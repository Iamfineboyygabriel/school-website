import { combineReducers } from "@reduxjs/toolkit";
import authReducer from './slices/auth.slices'
import  registeredStudentSlice  from "./slices/registeredStudent.slices";

const rootReducer = combineReducers({
  auth: authReducer,
  registration: registeredStudentSlice,
});

export default rootReducer;
