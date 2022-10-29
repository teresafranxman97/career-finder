import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
	jobs: [],
};

const jobsSlice = createSlice({
	name: "jobs",
	initialState,
	reducers: {
		setJobs: (state, action) => {
			state.jobs = action.payload;
		},
	},
	extraReducers: {
		[HYDRATE]: (state, action) => {
			return {
				...state,
				...action.payload.jobs,
			};
		},
	},
});

export const { setJobs } = jobsSlice.actions;
export default jobsSlice.reducer;
