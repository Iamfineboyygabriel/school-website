import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message.slices";
import getStudentLessonsService from "../services/GetLessons.services";

export const GetLessons = createAsyncThunk(
  "lessons/getLessons",
  async (thunkAPI) => {
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
  status: "isIdle",
  error: null,
};

const lessonsSlice = createSlice({
  name: "lessons",
  initialState,
  reducers: {
    reset(state) {
      state.status = "isIdle";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GetLessons.pending, (state) => {
      state.status = "isLoading";
      state.error = null;
    });
    builder.addCase(GetLessons.fulfilled, (state, action) => {
      state.status = "isSuccess";
      state.lessons = action.payload;
    });
    builder.addCase(GetLessons.rejected, (state, action) => {
      state.status = "isError";
      state.error = action.payload;
    });
  },
});

export const { reducer: lessonsReducer } = lessonsSlice;
export const lessonsSliceActions = lessonsSlice.actions;
export default lessonsSlice;
