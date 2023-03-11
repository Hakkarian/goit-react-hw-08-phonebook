import { createSlice } from "@reduxjs/toolkit";
import { checkUpdate, logout, signin, signup } from "./auth-operations";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    token: '',
    isLoading: false,
    error: null,
    isLogin: false,
  },
  extraReducers: builder => {
    builder
      .addCase(signup.pending, state => {
        state.isLoading = true;
      })
      .addCase(signup.fulfilled, (state, { payload }) => {
        const { user, token } = payload;
        state.isLoading = false;
        state.user = user;
        state.token = token;
        state.isLogin = true;
      })
      .addCase(signup.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.error;
      })
      .addCase(signin.pending, state => {
        state.isLoading = true;
      })
      .addCase(signin.fulfilled, (state, { payload }) => {
        const { token, user } = payload;
        state.isLoading = false;
        state.user = user;
        state.token = token;
        state.isLogin = true;
      })
      .addCase(signin.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.error;
      })
      .addCase(logout.pending, state => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, state => {
        state.isLoading = false;
        state.user = {};
        state.token = '';
        state.isLogin = false;
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.error;
      })
      .addCase(checkUpdate.pending, state => {
        state.isLoading = true;
      })
      .addCase(checkUpdate.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.isLoading = false;
        state.user = payload;
        state.isLogin = true;
      })
    //   .addCase(checkUpdate.fulfilled, (state, { payload }) => {
    //     const { user, token } = payload;
    //     state.isLoading = false;
    //     state.user = user;
    //     state.token = token;
    //     state.isLogin = true;
    //   })
      .addCase(checkUpdate.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default authSlice.reducer;