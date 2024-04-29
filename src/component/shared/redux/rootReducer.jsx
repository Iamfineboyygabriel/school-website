import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/auth.slices";
import registeredStudentSlice from "./slices/registeredStudent.slices";
import studentProfileSlice from "./slices/GetStudentProfile.slices";
// import  lessonSlice  from "./slices/addlesson.slices";
import { lessonSlice } from "./slices/addlesson.slices";
import studentLessonSlice from "./slices/GetLessons.slices";
import studentSubjectsSlice from "./slices/GetStudentSubjects.slices";
import { adminLessonSlice } from "./slices/AdminGetLessons.slices";
import { messageSlices } from "./slices/message.slices";
const rootReducer = combineReducers({
  auth: authReducer,
  student: studentProfileSlice,
  registration: registeredStudentSlice,
  lesson: lessonSlice.reducer,
  studentLesson: studentLessonSlice.reducer,
  subjects: studentSubjectsSlice,
  admin: adminLessonSlice.reducer,
  message: messageSlices.reducer,
});

export default rootReducer;

// import { combineReducers } from "@reduxjs/toolkit";
// import authReducer from "./slices/auth.slices";
// import registeredStudentSlice from "./slices/registeredStudent.slices";
// import studentProfileSlice from "./slices/GetStudentProfile.slices";
// import { lessonReducer } from "./slices/addlesson.slices";
// import { lessonsReducer } from "./slices/GetLessons.slices";
// import studentSubjectsSlice from "./slices/GetStudentSubjects.slices";

// const rootReducer = combineReducers({
//   auth: authReducer,
//   student: studentProfileSlice,
//   registration: registeredStudentSlice,
//   lesson: lessonReducer,
//   lessons: lessonsReducer,
//   subjects: studentSubjectsSlice,
// });

// export default rootReducer;
