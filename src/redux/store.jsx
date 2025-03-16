import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { contactReducer } from "./contactSlice";
import { filtersReducer } from "./filtersSlice";

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filters'],
};

const persistedContactsReducer = persistReducer(persistConfig, contactReducer);

export const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    contacts: persistedContactsReducer,
    filters: filtersReducer,
  },
});

export const persistor = persistStore(store);
