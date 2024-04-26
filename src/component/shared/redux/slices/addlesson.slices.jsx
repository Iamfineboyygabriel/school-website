import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message.slices";
import AddLessonServices from "../services/addlesson.services";

export const AddLesson = createAsyncThunk(
  "lesson/addLesson",
  async (body, thunkAPI) => {
    try {
      const data = await AddLessonServices.AdminAddLesson(body);
      return { lesson: data };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const UploadLesson = createAsyncThunk(
  "lesson/uploadLesson",
  async (body, thunkAPI) => {
    try {
      const data = await AddLessonServices.UploadLesson(body);
      return { lesson: data };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState = {
  addLesson: null,
  uploadLesson: null,
};

export const lessonSlice = createSlice({
  name: "lesson",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(AddLesson.fulfilled, (state, action) => {
      state.addLesson = action.payload.lesson;
    });
    builder.addCase(AddLesson.rejected, (state) => {
      state.addLesson = null;
    });
  },

  extraReducers: (builder) => {
    builder.addCase(UploadLesson.fulfilled, (state, action) => {
      state.uploadLesson = action.payload.lesson;
    });
    builder.addCase(UploadLesson.rejected, (state) => {
      state.uploadLesson = null;
    });
  },
});

const { reducer } = lessonSlice;
export default reducer;
