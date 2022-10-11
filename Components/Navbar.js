import Link from "next/link";

const Navbar = () => {
	return (
		<nav>
			<div className="logo">
				<h6>Career Finder</h6>
			</div>
			<div>
				<Link href="/">
					<a>Home</a>
				</Link>
				<Link href="/jobs">
					<a>Jobs</a>
				</Link>
				<Link href="/about">
					<a>About</a>
				</Link>
				<Link href="/signup">
					<a>Signup</a>
				</Link>
			</div>
		</nav>
	);
};
export default Navbar;
