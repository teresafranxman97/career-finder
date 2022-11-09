import Link from "next/link";

const Login = () => {
	return (
		<main>
			<header>
				<h1>Login</h1>
			</header>
			<div>
				<form method="post">
					<label htmlFor="email">
						E Mail
						<input type="email" id="email" name="email" />
					</label>
					<label htmlFor="password">
						Password
						<input type="text" id="password" name="password" />
					</label>

					<div>
						<button type="submit">Log In</button>
					</div>
				</form>
				<div>
					<p>
						Don't have an account yet?
						<Link href="/signup">Sign Up</Link>
					</p>
				</div>
			</div>
		</main>
	);
};

export default Login;
