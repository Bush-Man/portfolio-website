// LoginPage.js
import React, { useEffect, useState } from "react";
import "./LoginPage.css";
import { useDispatch, useSelector } from "react-redux";
import { LoginApi } from "../../api/Login";
import { useNavigate } from "react-router-dom";
import RoutesConstants from "../../constants/RouteConstants";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  if (user.userId != null) {
    useEffect(() => {
      navigate(RoutesConstants.HOME_PATH);
    }, []);
  }

  const handleLogin = (e) => {
    e.preventDefault();
    LoginApi(dispatch, email, password);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-logo">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-container">
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            {isLoading ? "Loading..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
