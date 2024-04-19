import studentProfileService from "../services/getProfile.services";
import { setMessage } from "./message.slices";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//GET STUDENT PROFILE SLICE
export const getStudentProfile = createAsyncThunk(
  "student/getStudentProfile",
  async (thunkAPI) => {
    try {
      const data = await studentProfileService.getStudentProfile();
      console.log("here", data);
      return { student: data };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.error("Error fetching registered students:", message);
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState = {
  profile: null,
};

export const studentProfileSlice = createSlice({
  name: "student",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getStudentProfile.fulfilled, (state, action) => {
      state.profile = action.payload.students;
    });
    builder.addCase(getStudentProfile.rejected, (state) => {
      state.profile = null;
    });
  },
});

const { reducer } = studentProfileSlice;
export default reducer;
