import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
    baseURL: "https://connections-api.goit.global/",
})

const setAuthHeaders  = (token) => {
    instance.defaults.headers.common.Authorization =  `Bearer ${token}`
}

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
  };

export const apiLogin = createAsyncThunk(
    "auth/login",
    async (formData, thunkApi) => {
        try {
            const { data }  = await instance.post("/users/login", formData);
            setAuthHeaders(data.token)
            return data
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)

export const apiRegister = createAsyncThunk(
    "auth/register",
    async (formData, thunkApi) => {
        try {
            const { data }  = await instance.post("/users/signup", formData);
            setAuthHeaders(data.token)
            return data
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)

export const logOut = createAsyncThunk(
    'auth/logOut',
    async (_, thunkAPI) => {
      try {
         await instance.post("/users/logout");
        clearAuthHeader(); 
        return; 
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

export const apiRefreshUser = createAsyncThunk(
    'auth/refreshUser',
    async (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const token = state.auth.token;
  
      if (token ===  null) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
      }
  
      try {
        setAuthHeaders(token); 
        const response = await instance.get(`/users/current`);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );