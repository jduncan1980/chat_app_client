import {
	combineReducers,
	configureStore,
	getDefaultMiddleware,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';

const reducer = combineReducers({});
const store = configureStore({
	reducer,
	middleware: [...getDefaultMiddleware(), logger],
});

export type RootState = ReturnType<typeof reducer>;

export default store;
