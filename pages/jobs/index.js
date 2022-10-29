import axios from "axios";
import Link from "next/link";
import { wrapper } from "../../store";
import { setJobs } from "../../Features/jobs/jobsSlice";
import { useSelector } from "react-redux";

export const getServerSideProps = wrapper.getServerSideProps(
	(store) => async () => {
		const response = await axios.get("https://findwork.dev/api/jobs/", {
			headers: { Authorization: `Token ${process.env.KEY}` },
		});
		const jobs = response.data.results;

		store.dispatch(setJobs(jobs));
	}
);

const Jobs = () => {
	const { jobs } = useSelector((state) => state.jobs);

	return (
		<main>
			<h1>Jobs List</h1>
			{jobs.map((job) => (
				<Link href={`/jobs/${job.id}`} key={job.id}>
					<div>
						<h2>{job.role}</h2>
						<h4>{job.company_name}</h4>
					</div>
				</Link>
			))}
		</main>
	);
};

export default Jobs;
