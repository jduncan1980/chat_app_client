import {
	combineReducers,
	configureStore,
	getDefaultMiddleware,
} from '@reduxjs/toolkit';
import userSlice from './reduxSlices/userSlice';
import logger from 'redux-logger';

const reducer = combineReducers({
	user: userSlice,
});
const store = configureStore({
	reducer,
	middleware: [...getDefaultMiddleware(), logger],
});

export type RootState = ReturnType<typeof reducer>;

export default store;
