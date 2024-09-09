import { createSlice } from "@reduxjs/toolkit"
import { apiAddContact, apiDeleteContact, apiGetAllContacts } from "./operations";

const handlePending = state => {
    state.isLoading = true;
  };
  
  const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  };

const INITIAL_STATE = {
      items: [],
      loading: false,
      error: null
  }

const contactSlice = createSlice({
    name: "contacts",
    initialState: INITIAL_STATE,
    extraReducers: (builder) => builder.addCase(apiGetAllContacts.pending, handlePending)
    .addCase(apiGetAllContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload
    }).addCase(apiGetAllContacts.rejected, handleRejected)
    .addCase(apiDeleteContact.pending, handlePending)
    .addCase(apiDeleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(contact => contact.id !== action.payload.id)
    }).addCase(apiDeleteContact.rejected, handleRejected)
    .addCase(apiAddContact.pending, handlePending)
    .addCase(apiAddContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload)
    }).addCase(apiAddContact.rejected, handleRejected)
})

export const contactsReducer = contactSlice.reducer;