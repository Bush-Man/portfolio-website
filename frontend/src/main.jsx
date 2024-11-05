import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { store } from "./Redux/Store.js";
import { Provider } from "react-redux";
import AppRouter from "./routes/router.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <MantineProvider>
        <AppRouter />
      </MantineProvider>
    </Provider>
  </React.StrictMode>
);
