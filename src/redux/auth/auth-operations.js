import { Alert } from '@mui/material';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import * as api from 'shared/services/auth';



export const signup = createAsyncThunk("auth/signup", async (data, { rejectWithValue }) => {
    try {
        const result = await api.signup(data);
        toast('Welcome!', {
          icon: '🎩',
          style: {
            borderRadius: '10px',
            background: 'darkgreen',
            color: '#fff',
          },
        });
        return result;
    } catch ({ response }) {
        toast(
          'Please enter the correct value. For example, "name: apple, email: apple@gmail.com, password: 123apple"',
          {
            icon: '🚫',
            style: {
              borderRadius: '10px',
              background: '#fff',
              color: '#000',
            },
          }
        );
        return rejectWithValue(response);
    }
})

export const signin = createAsyncThunk("auth/signin", async(data, { rejectWithValue }) => {
    try {
        const result = await api.signin(data);
        toast('Long time no see!', {
          icon: '😉',
          style: {
            borderRadius: '10px',
            background: 'darkgreen',
            color: '#fff',
          },
        });
        return result;
    } catch ({ response }) {
        toast(
          'Please enter the correct value. For example, "email: apple@gmail.com, password: 123apple"',
          {
            icon: '🚫',
            style: {
              borderRadius: '10px',
              background: '#fff',
              color: '#000',
            },
          }
        );
        return rejectWithValue(response);
    }
})

export const logout = createAsyncThunk("auth/logout", async (_, { rejectWithValue }) => {
    try {
        const result = await api.logout();
        console.log("operations", result)
        toast('See you later, aligater!', {
          icon: '👋',
          style: {
            borderRadius: '10px',
            background: 'darkblue',
            color: '#fff',
          },
        });
        return result;
    } catch ({response}) {
        return rejectWithValue(response)
    }
})

export const checkUpdate = createAsyncThunk("auth/current", async (_, { rejectWithValue, getState }) => {
    console.log("I'm launching...")
    try {
        const { auth } = getState();
        const result = await api.checkState(auth.token);
        toast('Checking updates...', {
          icon: '⏳',
          style: {
            borderRadius: '10px',
            background: 'darkorange',
            color: '#fff',
          },
        });
        return result;
    } catch ({response}) {
        return rejectWithValue(response)
    }
}, {
    condition: (_, { getState }) => {
        const { auth } = getState();
        if (!auth.token) {
            return false;
        }
    }
})