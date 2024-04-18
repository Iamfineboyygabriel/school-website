import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message.slices";
import AuthServices from "../services/auth.services";

/*AUTH SLICE TO ADD AN ADMIN POST*/
export const RegisterAnAdmin = createAsyncThunk(
  "auth/registerAnAdmin",
  async (body, thunkAPI) => {
    try {
      const data = await AuthServices.AddAnAdmin(body);
      return { auth: data };
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

/**AUTH SLICE TO LOGIN ADMIN  */
export const AdminLogin = createAsyncThunk(
  "auth/adminLogin",
  async (body, thunkAPI) => {
    try {
      const data = await AuthServices.LoginAdmin(body);
      return { auth: data };
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

/**AUTH SLICE TO APPROVE STUDENT ADMISSION */
export const ApproveStudent = createAsyncThunk(
  "auth/approveStudent",
  async (body, thunkAPI) => {
    try {
      const data = await AuthServices.AdminApprove(body);
      return { auth: data };
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

/* AUTH SLICE ADMIN FORGET PASSWORD */
export const ForgetAdminPassword = createAsyncThunk(
  "auth/forgetAdminPassword",
  async (body, thunkAPI) => {
    try {
      const data = await AuthServices.AdminForget(body);
      return { auth: data };
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

/*STUDENT REGISTRATION POST*/
export const RegisterStudent = createAsyncThunk(
  "auth/registerStudent",
  async (body, thunkAPI) => {
    try {
      const data = await AuthServices.AddStudent(body);
      return { auth: data };
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

/*STUDENT LOGIN POST*/
export const LoginStudent = createAsyncThunk(
  "auth/loginStudent",
  async (body, thunkAPI) => {
    try {
      const data = await AuthServices.StudentLogin(body);
      return { auth: data };
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

/*STUDENT FORGET PASSWORD POST*/
export const ForgetPassword = createAsyncThunk(
  "auth/forgetPassword",
  async (body, thunkAPI) => {
    try {
      const data = await AuthServices.ForgetStudentPassword(body); // Updated function name
      return { auth: data };
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
  registerAdmin: null,
  registerStudent: null,
  loginStudent: null,
  loginAdmin: null,
  forgetPassword: null,
  forgetAdminPassword: null,
  approveStudent: null,
  adminData: null, //remove late
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(RegisterAnAdmin.fulfilled, (state, action) => {
      state.registerAdmin = action.payload.auth;
    });
    builder.addCase(RegisterAnAdmin.rejected, (state) => {
      state.registerAdmin = null;
    });
    builder.addCase(RegisterStudent.fulfilled, (state, action) => {
      state.registerStudent = action.payload.auth;
    });
    builder.addCase(RegisterStudent.rejected, (state) => {
      state.registerStudent = null;
    });
    builder.addCase(LoginStudent.fulfilled, (state, action) => {
      state.loginStudent = action.payload.auth;
    });
    builder.addCase(LoginStudent.rejected, (state) => {
      state.loginStudent = null;
    });
    builder.addCase(ForgetPassword.fulfilled, (state, action) => {
      state.forgetPassword = action.payload.auth;
    });
    builder.addCase(ForgetPassword.rejected, (state) => {
      state.forgetPassword = null;
    });
    builder.addCase(AdminLogin.fulfilled, (state, action) => {
      state.loginAdmin = action.payload.auth;
    });
    builder.addCase(AdminLogin.rejected, (state) => {
      state.loginAdmin = null;
    });
    builder.addCase(ForgetAdminPassword.fulfilled, (state, action) => {
      state.forgetAdminPassword = action.payload.auth;
    });
    builder.addCase(ForgetAdminPassword.rejected, (state) => {
      state.forgetAdminPassword = null;
    });
    builder.addCase(ApproveStudent.fulfilled, (state, action) => {
      state.approveStudent = action.payload.auth;
    });
    builder.addCase(ApproveStudent.rejected, (state) => {
      state.approveStudent = null;
    });
  },
});

const { reducer } = authSlice;
export default reducer;
