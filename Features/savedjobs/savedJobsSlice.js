import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	savedJobs: [],
};

const savedJobsSlice = createSlice({
	name: "savedJobs",
	initialState,
	reducers: {},
});

// export const {} = savedJobsSlice.actions;
export default savedJobsSlice.reducer;
