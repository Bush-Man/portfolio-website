// src/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "contactModal",
  initialState: {
    isClosed: true,
    isLoading: false,
    isOpen: false,
  },
  reducers: {
    modalOpening: (state) => {
      state.isClosed = false;
      state.isOpen = false;
      state.isLoading = true;
    },
    modalOpen: (state) => {
      state.isClosed = false;
      state.isOpen = true;
      state.isLoading = false;
    },
    modalClosing: (state) => {
      state.isClosed = false;
      state.isOpen = false;
      state.isLoading = true;
    },
    modalClosed: (state) => {
      state.isClosed = true;
      state.isOpen = false;
      state.isLoading = false;
    },
  },
});

export const { modalOpening, modalOpen, modalClosing, modalClosed } =
  modalSlice.actions;
export default modalSlice.reducer;
