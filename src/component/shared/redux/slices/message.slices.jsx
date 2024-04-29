import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
};

export const messageSlices = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    clearMessage: (state) => {
      state.message = "";
    },
  },
});

const { reducer, actions } = messageSlices;

export const { setMessage, clearMessage } = actions;
export default reducer;
