import axios from "axios";
import { wrapper } from "../../store";
import { setJob } from "../../Features/jobs/jobSlice";
import { useSelector } from "react-redux";

export const getServerSideProps = wrapper.getServerSideProps(
	(store) => async (context) => {
		const { id } = context.query;

		const response = await axios.get(`https://findwork.dev/api/jobs/${id}`, {
			headers: { Authorization: `Token ${process.env.KEY}` },
		});

		const job = response.data;

		store.dispatch(setJob(job));
	}
);


const Job = () => {
	const { job } = useSelector((state) => state.job);

	return (
		<main key={job.id}>
			<h1>{job.role}</h1>
			<h5>{job.company_name}</h5>
			<div dangerouslySetInnerHTML={{ __html: job.text }} />
			<div>
				<a href={job.url}>
					<button>Apply Now</button>
				</a>

				<button>Save Job</button>
			</div>
		</main>
	);
};

export default Job;

