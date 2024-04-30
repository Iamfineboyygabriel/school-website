import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message.slices";
import getStudentLessonsService from "../services/GetLessons.services";

export const GetLessons = createAsyncThunk(
  "student/getLessons",
  async (_, thunkAPI) => {
    try {
      const data = await getStudentLessonsService.GetStudentLessons();
      console.log("Received student data:", data);
      return data; // Directly return the lessons data
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
  studentLessons: null,
};

const studentLessonSlice = createSlice({
  name: "student",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetLessons.fulfilled, (state, action) => {
      state.studentLessons = action.payload;
    });
    builder.addCase(GetLessons.rejected, (state, action) => {
      state.studentLessons = null;
    });
  },
});

export const { reducer } = studentLessonSlice;
export default reducer;
