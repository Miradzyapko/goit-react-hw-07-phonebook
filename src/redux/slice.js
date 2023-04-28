/*import { createSlice } from '@reduxjs/toolkit';
const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
        filter: '',
    },
    reducers: {
    addContacts (state, action) {
        state.contacts.push({
          id: new Date().toISOString(),
          name: action.payload.name,
          number: action.payload.number,
      });
  },
        
      
      deleteContact(state,action) {
        state.contacts =
          state.contacts.filter((contact)=> contact.id !== action.payload);
        
      },
    
      
      addFilter(state, action) {
        state.filter = action.payload;
      },
      },
    }
  );
  export const { addContacts, addFilter, deleteContact } = contactSlice.actions
  export const contactsReducer = contactSlice.reducer;
*/
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