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
      console.error("i ma root", error.response);
      if (error && error.code === "Network Error") {
        thunkAPI.dispatch(setMessage("something went wrong please try again"));
        return thunkAPI.rejectWithValue(
          "something went wrong please try again"
        );
      } else if (error?.response) {
        const message = error?.response.data.message;
        thunkAPI.dispatch(setMessage(message));
        return thunkAPI.rejectWithValue(message);
      } else {
        thunkAPI.dispatch(setMessage("something went wrong please try again"));
        return thunkAPI.rejectWithValue(
          "something went wrong please try again"
        );
      }
    }
  }
);

export const UploadLesson = createAsyncThunk(
  "lesson/uploadLesson",
  async (file, thunkAPI) => {
    try {
      const data = await AddLessonServices.UploadLesson(file);
      return { lesson: data };
    } catch (error) {
      console.error("i ma root", error);

      if (error && error.code === "Network Error") {
        thunkAPI.dispatch(setMessage("something went wrong please try again"));
        return thunkAPI.rejectWithValue(
          "something went wrong please try again"
        );
      } else if (error?.response) {
        const message = error?.response.data.message;
        thunkAPI.dispatch(setMessage(message));
        return thunkAPI.rejectWithValue(message);
      } else {
        thunkAPI.dispatch(setMessage("something went wrong please try again"));
        return thunkAPI.rejectWithValue(
          "something went wrong please try again"
        );
      }
    }
  }
);

const initialState = {
  addLesson: null,
  uploadLesson: null,
  status: "isIdle",
  addLessonStatus: "isIdle",
  uploadFileUrl: null,
};

export const lessonSlice = createSlice({
  name: "lesson",
  initialState,
  reducers: {
    reset(state) {
      state.status = "isIdle";
    },
    addLessonStatusReset(state) {
      state.addLessonStatus = "isIdle";
    },
  },
  // extraReducers: (builder) => {

  // },

  extraReducers: (builder) => {
    builder.addCase(AddLesson.pending, (state, action) => {
      state.addLessonStatus = "isLoading";
      // state.addLesson = action.payload.lesson;
    });
    builder.addCase(AddLesson.fulfilled, (state, action) => {
      state.addLessonStatus = "isSuccess";
      // state.addLesson = action.payload.lesson;
    });
    builder.addCase(AddLesson.rejected, (state) => {
      state.addLessonStatus = "isError";
      state.addLesson = null;
    });
    builder.addCase(UploadLesson.pending, (state) => {
      state.status = "isLoading";
      state.uploadFileUrl = null;
    });
    builder.addCase(UploadLesson.fulfilled, (state, action) => {
      state.status = "isSuccess";
    });
    builder.addCase(UploadLesson.rejected, (state) => {
      state.status = "isError";
      state.uploadFileUrl = null;
    });
  },
});

const { reducer } = lessonSlice;
export const lessonsliceAction = lessonSlice.actions;
export default reducer;
