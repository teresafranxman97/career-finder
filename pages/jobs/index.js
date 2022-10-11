import { useState } from "react";
import axios from "axios";
import Link from "next/link";

export const getServerSideProps = async () => {
    const response = await axios.get("https://findwork.dev/api/jobs/", {
        headers: { Authorization: `Token ${process.env.KEY}` }
    });

    const data = response.data.results

    return { props: { data } }
};

const Jobs = ({ data }) => {
	const [jobs] = useState(data);

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
