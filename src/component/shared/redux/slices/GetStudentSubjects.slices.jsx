import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message.slices";
import classSubjectsService from "../services/GetStudentSubjects.services";

// Modify the GetSubjects thunk action creator to accept class_name as a parameter
export const GetSubjects = createAsyncThunk(
  "subjects/getSubjects",
  async (class_name) => { // Accept class_name as a parameter
    try {
      // Call GetClassSubjects service with the class_name parameter
      const data = await classSubjectsService.GetClassSubjects(class_name);
      console.log("Subjects data:", data); // Log fetched data
      return { subjects: data }; // Changed key name to "subjects"
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.error("Error fetching class subjects:", message); // Updated error message
      return Promise.reject(message);
    }
  }
);

const initialState = {
  subjects: null,
};

export const studentSubjectsSlice = createSlice({
  name: "subjects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetSubjects.fulfilled, (state, action) => {
      state.subjects = action.payload.subjects; // Corrected key name
    });
    builder.addCase(GetSubjects.rejected, (state) => {
      state.subjects = null;
    });
  },
});

const { reducer } = studentSubjectsSlice;
export default reducer;

