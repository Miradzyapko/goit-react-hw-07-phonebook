import { createSlice } from "@reduxjs/toolkit";
// Імпортуємо операцію
import { fetchContacts, addContact, deleteContact } from "./action";

const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  // Додаємо обробку зовнішніх екшенів
  extraReducers: {
    [fetchContacts.pending](state, action) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },


    [addContact.pending](state, action) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContact.pending](state, action) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);



      },
    
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});



const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    addFilter(state, action) {
      return (state = action.payload);
    },
  },
});


export const { addFilter } = filterSlice.actions;


export const contactsReducer = contactSlice.reducer;
export const filterReducer = filterSlice.reducer;