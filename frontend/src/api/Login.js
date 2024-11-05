import UrlConstants from "../constants/UrlConstants.js";

import { loginStart, loginSuccess, loginFail } from "../Redux/LoginSlice.js";

export const LoginApi = async (dispatch, email, password) => {
  dispatch(loginStart());
  try {
    let res = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ email, password }),
    });
    if (res.ok) {
      const data = await res.json();
      const token_identity = import.meta.env.VITE_PORTFOLIO_JWT_TOKEN;
      localStorage.setItem(token_identity, data.token);

      dispatch(loginSuccess(data));
    } else {
      const error = await res.json();
      dispatch(loginFail(error));
    }
  } catch (error) {
    dispatch(loginFail(error.message));
  }
};
