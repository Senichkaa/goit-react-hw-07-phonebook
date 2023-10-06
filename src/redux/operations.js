import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://652005fc906e276284c3ea42.mockapi.io"

export const fetchContacts = createAsyncThunk("contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/contacts');
            return response.data
        } catch (event) {
            return thunkAPI.rejectWithValue(event.message)
    }
    })

export const addContact = createAsyncThunk("contacts/addContact", async (text, thunkAPI) => {
    try {
        const response = await axios.get('/contacts', text)
        return response.data
    } catch (event) {
        return thunkAPI.rejectWithValue(event.message)
    }
})

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId, thunkAPI) => {
    try {
        const response = await axios.get(`/contacts/${contactId}`)
        return response.data
    } catch (event) {
        return thunkAPI.rejectWithValue(event.message)
    }
})