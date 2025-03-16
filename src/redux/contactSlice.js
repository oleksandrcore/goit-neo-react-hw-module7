import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./constants.js";

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact(state, action) {
      state.contacts.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts.items = state.contacts.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
  selectors: {
    selectContacts: (state) => state.contacts.items,
  },
});


export const { addContact, deleteContact } = contactSlice.actions;
export const { selectContacts } = contactSlice.selectors;
export const contactReducer = contactSlice.reducer;
