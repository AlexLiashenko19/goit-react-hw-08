import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/slice";
import { filterReducer } from "./filter/slice";
import { authReducer } from "./auth/slice";
import { persistReducer, persistStore, FLUSH, REHYDRATE,  PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

const  authConfig = {
  key: 'auth',
  storage,
  whitelist: ["token"]
}

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: persistReducer(authConfig, authReducer),
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE,  REGISTER],

      }
    })
});

export const persistor =  persistStore(store);
