import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { filterReducer } from "./filters/slice";
import { contactsReducer } from "./contacts/slice";
import authReducer from "./auth/slice";

const persistedAuthReducer = persistReducer( {
  key: 'auth-token',
  storage,
  whitelist: ["token"],
}, authReducer)

export const store = configureStore({
   reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: persistedAuthReducer,
  },
});

export const persistor = persistStore(store);