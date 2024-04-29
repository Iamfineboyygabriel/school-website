// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { setMessage } from "./message.slices";
// import getStudentLessonsService from "../services/GetLessons.services";

// export const GetLessons = createAsyncThunk(
//   "lessons/getLessons",
//   async (thunkAPI) => {
//     try {
//       const data = await getStudentLessonsService.GetStudentLessons();
//       console.log("Received student data:", data);
//       return data;
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       console.error("Error fetching lessons:", message);
//       thunkAPI.dispatch(setMessage(message));
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

// const initialState = {
//   lessons: null,
//   loading: false,
//   error: null,
// };

// const lessonsSlice = createSlice({
//   name: "lessons",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(GetLessons.pending, (state) => {
//       state.loading = true;
//       state.error = null;
//     });
//     builder.addCase(GetLessons.fulfilled, (state, action) => {
//       state.lessons = action.payload;
//       state.loading = false;
//     });
//     builder.addCase(GetLessons.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     });
//   },
// });

// export const { reducer: lessonsReducer } = lessonsSlice;
// export default lessonsSlice;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message.slices";
import getStudentLessonsService from "../services/GetLessons.services";

export const GetLessons = createAsyncThunk(
  "lessons/getLessons",
  async (_, thunkAPI) => {
    // The first argument (_) is unused
    try {
      const data = await getStudentLessonsService.GetStudentLessons();
      console.log("Received student data:", data);
      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.error("Error fetching lessons:", message);
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState = {
  lessons: null,
  loading: false,
  error: null,
};

const lessonsSlice = createSlice({
  name: "lessons",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetLessons.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(GetLessons.fulfilled, (state, action) => {
      state.lessons = action.payload;
      state.loading = false;
    });
    builder.addCase(GetLessons.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { reducer: lessonsReducer } = lessonsSlice;
export default lessonsSlice;
