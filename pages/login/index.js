import Link from "next/link";
import LoginForm from "./loginForm";

const Login = () => {
	return (
		<main>
			<header>
				<h1>Login</h1>
			</header>
			<LoginForm />
			<div>
				<p>
					Don't have an account yet?
					<Link href="/signup">Sign Up</Link>
				</p>
			</div>
		</main>
	);
};

export default Login;
