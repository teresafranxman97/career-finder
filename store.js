import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import savedJobsReducer from "./Features/savedjobs/savedJobsSlice";
import { api } from "./Features/api/api";

export const makeStore = () =>
	configureStore({
		reducer: {
			savedJobs: savedJobsReducer,
			[api.reducerPath]: api.reducer,
		},
		middleware: (getDefaultMiddleware) => {
			return getDefaultMiddleware().concat(api.middleware);
		},
	});

export const wrapper = createWrapper(makeStore, { debug: true });
