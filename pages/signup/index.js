import Link from "next/link";
import SignUpForm from "./signUpForm";

const Signup = () => {
	return (
		<main>
			<header>
				<h1>Sign Up</h1>
			</header>
			<SignUpForm />
			<div>
				<p>
					Already have an account? <Link href="/login">Log in</Link>
				</p>
			</div>
		</main>
	);
};

export default Signup;
