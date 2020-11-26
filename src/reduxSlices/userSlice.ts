import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = process.env.REACT_APP_SERVER;

export interface ILogin {
	username: string;
	password: string;
}

export interface IRegister {
	username: string;
	password: string;
	first_name: string;
	last_name: string;
	email: string;
}

export interface IState {
	username: string | null;
	first_name: string | null;
	last_name: string | null;
	email: string | null;
	error: string | null | undefined;
	loading: boolean;
}

export const registerUser = createAsyncThunk(
	'user/registerUser',
	async (data: IRegister, thunkApi) => {
		try {
			const user = await axios.post(`${URL}/api/auth/register`, data);
			return user.data;
		} catch (error) {
			throw Error(error);
		}
	}
);

export const loginUser = createAsyncThunk(
	'user/loginUser',
	async (data: ILogin, thunkApi) => {
		try {
			const user = await axios.post(`${URL}/api/auth/login`, data);
			window.localStorage.setItem('authToken', user.data.token);
			return user.data;
		} catch (error) {
			throw Error(error);
		}
	}
);

export const initialState: IState = {
	username: null,
	first_name: null,
	last_name: null,
	email: null,
	error: null,
	loading: false,
};

const userSlice = createSlice({
	name: 'location',
	initialState: initialState,
	reducers: {
		// setNewLocation: (state, { payload }) => {
		// 	state.country_name = payload.country_name;
		// 	state.city = payload.city;
		// 	state.state = payload.state;
		// 	state.latitude = payload.latitude;
		// 	state.longitude = payload.longitude;
		// },
	},
	extraReducers: (builder) => {
		builder.addCase(registerUser.pending, (state, { payload }) => {
			state.loading = true;
			state.error = null;
		});

		builder.addCase(registerUser.fulfilled, (state, { payload }) => {
			state.loading = false;
			state.error = null;
		});

		builder.addCase(registerUser.rejected, (state, { payload }) => {
			state.loading = false;
			state.error = `Something went wrong... ${payload}`;
		});

		builder.addCase(loginUser.pending, (state, { payload }) => {
			state.loading = true;
			state.error = null;
		});

		builder.addCase(loginUser.fulfilled, (state, { payload }) => {
			state.loading = false;
			state.error = null;
			state.username = payload.username;
			state.email = payload.email;
			state.first_name = payload.first_name;
			state.last_name = payload.last_name;
		});

		builder.addCase(loginUser.rejected, (state, { error }) => {
			state.loading = false;
			state.error = error.message;
			state.username = null;
			state.email = null;
			state.first_name = null;
			state.last_name = null;
		});
	},
});

export default userSlice.reducer;
