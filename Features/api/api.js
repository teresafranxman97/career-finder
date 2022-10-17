import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const api = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: "https://findwork.dev/api/jobs/",
		prepareHeaders: (headers) => {
			headers.set({ Authorization: `Token ${process.env.KEY}` });
		},
	}),
	extractRehydrationInfo(action, { reducerPath }) {
		if (action.type === HYDRATE) {
			return action.payload[reducerPath];
		}
	},
	endpoints: (build) => ({
		getAllJobs: build.query({
			query: () => "/jobs",
		}),
		getJobsById: build.query({
			query: (id) => ({ url: `/jobs/${id}` }),
		}),
	}),
});


export const { useGetAllJobsQuery, useGetJobsByIdQuery } = api;
export const { getAllJobs, getJobsById } = api.endpoints;

