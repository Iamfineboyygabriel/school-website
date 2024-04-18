import registeredStudentService from "../services/registeredStudent.services";
import { setMessage } from "./message.slices";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const GetRegisteredStudents = createAsyncThunk(
  "registration/getRegisteredStudents",
  async (thunkAPI) => {
    try {
      const data = await registeredStudentService.GetRegisteredStudents();
      return { students: data };
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
  getAllStudents: null,
};

export const registeredStudentSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetRegisteredStudents.fulfilled, (state, action) => {
      state.getAllStudents = action.payload.students;
    });
    builder.addCase(GetRegisteredStudents.rejected, (state) => {
      state.getAllStudents = null;
    });
  },
});

const { reducer } = registeredStudentSlice;
export default reducer;
