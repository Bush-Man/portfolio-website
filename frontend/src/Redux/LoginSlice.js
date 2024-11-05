import { createSlice } from "@reduxjs/toolkit";

const token_identity = import.meta.env.VITE_PORTFOLIO_JWT_TOKEN;
const loginSlice = createSlice({
  name: "loginSlice",
  initialState: {
    user: null,
    success: false,
    error: false,
    isLoading: false,
  },
  reducers: {
    loginStart: (state) => {
      (state.user = null),
        (state.isLoading = true),
        (state.error = false),
        (state.success = false);
    },
    loginSuccess: (state, action) => {
      (state.user = action.payload),
        (state.isLoading = false),
        (state.error = false),
        (state.success = true);
    },
    loginFail: (state, action) => {
      (state.user = null),
        (state.isLoading = false),
        (state.error = action.payload),
        (state.success = false);
    },
  },
});
export const { loginFail, loginStart, loginSuccess } = loginSlice.actions;
export default loginSlice.reducer;
