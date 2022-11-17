import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
	job: {},
};

const jobSlice = createSlice({
	name: "job",
	initialState,
	reducers: {
		setJob: (state, action) => {
			state.job = action.payload;
		},
	},
	extraReducers: {
		[HYDRATE]: (state, action) => {
			return {
				...state,
				...action.payload.job,
			};
		},
	},
});

export const { setJob } = jobSlice.actions;
export default jobSlice.reducer;
