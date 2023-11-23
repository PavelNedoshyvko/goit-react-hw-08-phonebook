import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";


export const fetchContacts = createAsyncThunk(
	'contacts/fetchAll',
	async (_, { rejectWithValue }) => {
		try {
			const res = await axios.get('/contacts');
			return res.data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const addContact = createAsyncThunk(
	'contacts/addContact',
	async (contact, { rejectWithValue }) => {
		try {
			const res = await axios.post('/contacts', contact);
			return res.data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const deleteContact = createAsyncThunk(
	'contacts/deleteContact',
	async (id, { rejectWithValue }) => {
		try {
			const res = await axios.delete(`/contacts/${id}`);
			return res.data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);