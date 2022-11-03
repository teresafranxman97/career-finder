import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import savedJobsReducer from "./Features/savedjobs/savedJobsSlice";
import jobsReducer from "./Features/jobs/jobsSlice";
import jobReducer from "./Features/jobs/jobSlice";
import { api } from "./Features/api/api";

export const makeStore = () =>
	configureStore({
		reducer: {
			jobs: jobsReducer,
			job: jobReducer,
			savedJobs: savedJobsReducer,
			[api.reducerPath]: api.reducer,
		},
		middleware: (getDefaultMiddleware) => {
			return getDefaultMiddleware().concat(api.middleware);
		},
	});

export const wrapper = createWrapper(makeStore, { debug: true });
