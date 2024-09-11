import { createSlice } from "@reduxjs/toolkit"
import { apiLogin, apiRefreshUser, apiRegister, logOut } from "./operations";

const INITIAL_STATE =
  {
      user: {
        name: null,
        email: null,
      },
      token: null,
      isLoggedIn: false,
      isRefreshing: false,
      error:  null,

  }

  const authSlice = createSlice({
    name: 'auth',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: builder => builder
    .addCase(apiRegister.pending, (state) => {
      state.error = null;
    })
    .addCase(apiRegister.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.user = {
        name: action.payload.user.name,
        email: action.payload.user.email
      };
    })
    .addCase(apiRegister.rejected, (state, action) => {
      state.error = action.payload
    })
    .addCase(apiLogin.pending, (state) => {
      state.error = null;
    })
    .addCase(apiLogin.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.user = {
        name: action.payload.user.name,
        email: action.payload.user.email
      };
    })
    .addCase(apiLogin.rejected, (state, action) => {
      state.error = action.payload
    })
    .addCase(apiRefreshUser.pending, (state) => {
      state.error = null;
      state.isRefreshing = true;
    })
    .addCase(apiRefreshUser.fulfilled, (state, action) => {
    state.isLoggedIn = true;
    state.user = action.payload.user
    state.isRefreshing =  false;
    })
    .addCase(apiRefreshUser.rejected, (state, action) => {
      state.error = action.payload
      state.isRefreshing =  false;
    })
    .addCase(logOut.fulfilled, (state) => {
      state.user = null;
      state.isLoggedIn = false;
      state.token = null;
    })
})



export const authReducer = authSlice.reducer;