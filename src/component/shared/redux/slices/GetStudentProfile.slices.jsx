import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message.slices";
import studentProfileService from "../services/GetStudentProfile.services";

export const GetProfileStudent = createAsyncThunk(
  "student/GetStudentProfile",
  async (thunkAPI) => {
    try {
      const data = await studentProfileService.GetStudentProfile();
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
    builder.addCase(GetProfileStudent.fulfilled, (state, action) => {
      state.profile = action.payload.student;
    });
    builder.addCase(GetProfileStudent.rejected, (state) => {
      state.profile = null;
    });
  },
});

const { reducer } = studentProfileSlice;
export default reducer;
