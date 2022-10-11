import { useState } from "react";
import axios from "axios";
import Link from "next/link";

export const getServerSideProps = async (context) => {
	const { id } = context.query;
	const response = await axios.get(`https://findwork.dev/api/jobs/${id}`, {
		headers: { Authorization: `Token ${process.env.KEY}` },
	});

	const data = response.data;

	return { props: { data } };
};

const Job = ({ data }) => {
	const [job] = useState(data);

	return (
		<main>
			<h1>{job.role}</h1>
			<h5>{job.company_name}</h5>
			<div dangerouslySetInnerHTML={{ __html: job.text }} />
			<div>
				<Link href={job.url}>
					<button>Apply Now</button>
				</Link>
				<button>Save Job</button>
			</div>
		</main>
	);
};

export default Job;