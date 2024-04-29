import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message.slices";
import getAllLessonsService, {
  GetUploadedItems,
} from "../services/AdminGetLessons.services";

export const GetLessonsAdmin = createAsyncThunk(
  "admin/getLessonsAdmin",
  async (thunkAPI) => {
    try {
      const data = await getAllLessonsService.GetAllLessons();
      // console.log("lessons slice", data);
      return { admin: data };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.error("Error fetching student lessons:", message);
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const GetUploaded = createAsyncThunk(
  "admin/getUploaded",
  async (filename, thunkAPI) => {
    try {
      console.log("fetching data for filename:", filename); 
      const data = await GetUploadedItems(filename);
      console.log("uploadeditems", data);
      return { admin: data };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.error("Error fetching uploaded items:", message);
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState = {
  details: null,
  uploaded: null,
};

export const adminLessonSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetLessonsAdmin.fulfilled, (state, action) => {
      state.details = action.payload.admin;
    });
    builder.addCase(GetLessonsAdmin.rejected, (state) => {
      state.details = null;
    });
    builder.addCase(GetUploaded.fulfilled, (state, action) => {
      state.uploaded = action.payload.admin;
    });
    builder.addCase(GetUploaded.rejected, (state) => {
      state.uploaded = null;
    });
  },
});
const { reducer } = adminLessonSlice;

export default reducer;
