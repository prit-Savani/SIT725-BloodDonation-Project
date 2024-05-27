// Import necessary functions and modules
import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUser, userLogin, userRegister } from "./authActions";

// Retrieve token from local storage if available
const token = localStorage.getItem("token") ? localStorage.getItem("token") : null;

// Initial state for the authentication slice
const initialState = {
  loading: false,  // Flag indicating if authentication actions are in progress
  user: null,      // Current authenticated user
  token,           // JWT token for authenticated user
  error: null      // Error object for any authentication errors
};

// Define the authSlice using createSlice
const authSlice = createSlice({
  name: "auth",  // Slice name
  initialState: initialState,  // Initial state
  reducers: {},  // No additional reducers defined in this slice
  extraReducers: (builder) => {
    // Extra reducers for handling asynchronous actions

    // Login user
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;  // Set loading to true when login request is pending
      state.error = null;    // Reset error to null
    });
    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.loading = false;        // Set loading to false when login request is fulfilled
      state.user = payload.user;    // Update user with the authenticated user data
      state.token = payload.token;  // Update token with the JWT token
    });
    builder.addCase(userLogin.rejected, (state, { payload }) => {
      state.loading = false;  // Set loading to false when login request is rejected
      state.error = payload;  // Set error to the payload containing the error message
    });

    // Register user
    builder.addCase(userRegister.pending, (state) => {
      state.loading = true;  // Set loading to true when register request is pending
      state.error = null;    // Reset error to null
    });
    builder.addCase(userRegister.fulfilled, (state, { payload }) => {
      state.loading = false;     // Set loading to false when register request is fulfilled
      state.user = payload.user; // Update user with the registered user data
    });
    builder.addCase(userRegister.rejected, (state, { payload }) => {
      state.loading = false;  // Set loading to false when register request is rejected
      state.error = payload;  // Set error to the payload containing the error message
    });

    // Get current user
    builder.addCase(getCurrentUser.pending, (state) => {
      state.loading = true;  // Set loading to true when getCurrentUser request is pending
      state.error = null;    // Reset error to null
    });
    builder.addCase(getCurrentUser.fulfilled, (state, { payload }) => {
      state.loading = false;     // Set loading to false when getCurrentUser request is fulfilled
      state.user = payload.user; // Update user with the current user data
    });
    builder.addCase(getCurrentUser.rejected, (state, { payload }) => {
      state.loading = false;  // Set loading to false when getCurrentUser request is rejected
      state.error = payload;  // Set error to the payload containing the error message
    });
  },
});

export default authSlice;
