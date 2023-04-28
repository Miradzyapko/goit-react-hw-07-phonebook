/*import { nanoid } from 'nanoid';
const addContact = ({ name, number }) => {
    const contacts = {
      id: nanoid(),
      name,
      number,
    };

    const checkContact = contacts.find((contact) => contact.name.toLowerCase() === name.toLowerCase());
    if (checkContact) {
      alert(`${name} is already in contacts.`);
      return;
    }

    setContacts(prevState => 
       [contact, ...prevState]
    );

  }
  const handleDeleteContact = id => {
    setContacts(prevState => 
      prevState.filter(el => el.id !== id),
    );
  };
  export const setFilter = value => {
    return {
      type: "filter/setFilter",
      payload: value,
    };
  };*/
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

axios.defaults.baseURL = `https://64484100e7eb3378ca2b2afc.mockapi.io`;
  export const fetchContacts = createAsyncThunk(
'contacts/featchAll',
async (_, thunkAPI) => {
try {
  const response = await axios.get('/contacts');
  return response.data;
} catch (error) {
  return thunkAPI.rejectWithValue(error.message);
}
}
);

  export const addContact = createAsyncThunk(
    'contacts/addContact',
    async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', { name, number })
      return response.data;
    
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    
    }
      );
      export const deleteContact = createAsyncThunk(
        'contacts/deleteContact',
        async ( contactId , thunkAPI) => {
        try {
          const response = await axios.delete(`/contacts/${contactId}`)
          return response.data;
        
        } catch (error) {
          return thunkAPI.rejectWithValue(error.message);
        }
        
        }
          );
      

    
