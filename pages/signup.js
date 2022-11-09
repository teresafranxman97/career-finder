import Link from "next/link";

const Signup = () => {
	return (
		<main>
			<header>
				<h1>Sign Up</h1>
			</header>
			<form method="post">
				<label>
					First Name
					<input type="text" name="first" id="first" />
				</label>
				<label>
					Last Name
					<input type="text" name="last" id="last" />
				</label>
				<label htmlFor="email">
					E Mail
					<input type="email" id="email" name="email" />
				</label>
				<label htmlFor="password">
					Password
					<input type="text" id="password" name="password" />
				</label>
				<div>
					<button>Sign up</button>
				</div>
			</form>
			<div>
				<p>
					Already have an account? <Link href="/login">Log in</Link>
				</p>
			</div>
		</main>
	);
};

export default Signup;
