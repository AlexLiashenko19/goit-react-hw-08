import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const apiGetAllContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_,  thunkAPI) => {
        try {
            const {data} = await axios.get("https://66d4e03f5b34bcb9ab3fa481.mockapi.io/api/v1/contact")
            return data
        } catch (error) {
            return  thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const apiDeleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactsId, thunkAPI) => {
        try {
            const {data} = await axios.delete(`https://66d4e03f5b34bcb9ab3fa481.mockapi.io/api/v1/contact/${contactsId}`)
            return data
        } catch (error) {
            return  thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const apiAddContact = createAsyncThunk(
    'contacts/addContact',
    async (contact,  thunkAPI) => {
        try {
            const {data} = await axios.post(`https://66d4e03f5b34bcb9ab3fa481.mockapi.io/api/v1/contact`, contact)
            return data
        } catch (error) {
            return  thunkAPI.rejectWithValue(error.message)
        }
    }
)