import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllContacts, addContact, deleteContact } from 'shared/contacts';

// import {
//   fetchAddActContactsError,
//   fetchAddActContactsLoading,
//   fetchAddActContactsSuccess,
//   fetchAllActContactsError,
//   fetchAllActContactsLoading,
//   fetchAllActContactsSuccess,
// } from './cont-slice';

export const fetchAllContacts = createAsyncThunk("contacts/fetch", async (_, { rejectWithValue }) => {
  try {
    const data = await getAllContacts();
    return data;
  } catch ({ response }) {
    rejectWithValue(response.data.message);
  }
})
export const fetchAddContacts = createAsyncThunk("contacts/add", async (data, {rejectWithValue}) => {
  try {
    const result = await addContact(data);
    return result;
  } catch ({ response }) {
    rejectWithValue(response.data.message);
  }
})

export const fetchdDeleteContact = createAsyncThunk("contacts/delete", async (id, { rejectWithValue }) => {
  try {
    const result = await deleteContact(id);
    return result;
  } catch ({ response }) {
    rejectWithValue(response.data.message);
  }
}) 
