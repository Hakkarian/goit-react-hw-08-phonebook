import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'shared/services/auth';



export const signup = createAsyncThunk("auth/signup", async (data, { rejectWithValue }) => {
    try {
        const result = await api.signup(data);
        return result;
    } catch ({response}) {
        return rejectWithValue(response);
    }
})

export const signin = createAsyncThunk("auth/signin", async(data, { rejectWithValue }) => {
    try {
        const result = await api.signin(data);
        return result;
    } catch ({response}) {
        return rejectWithValue(response);
    }
})

export const logout = createAsyncThunk("auth/logout", async (_, { rejectWithValue }) => {
    try {
        const result = await api.logout();
        console.log("operations", result)
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
        console.log(result);
        console.log("I'm launching...");
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