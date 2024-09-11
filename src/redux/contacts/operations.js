import { createAsyncThunk } from "@reduxjs/toolkit"
import { instance } from "../auth/operations";

export const apiGetAllContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
      try {
        const { data } = await instance.get('/contacts');
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  export const apiDeleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
      try {
        const { data } = await instance.delete(`/contacts/${contactId}`);
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  export const apiAddContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, thunkAPI) => {
      try {
        const { data } = await instance.post('/contacts', contact);
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );