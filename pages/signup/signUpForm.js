import { useFormik } from "formik";
import schema from "./schema";

const SignUpForm = () => {
	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
		},
		validationSchema: schema,
		onSubmit: (values) => {
			console.log(values);
		},
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<label htmlFor="firstName">First Name</label>
			<input
				type="text"
				name="firstName"
				id="firstName"
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.firstName}
			/>
			{formik.touched.firstName && formik.errors.firstName ? (
				<div style={{ color: "red" }}>{formik.errors.firstName}</div>
			) : null}
			<label htmlFor="lastName">Last Name</label>
			<input
				type="text"
				name="lastName"
				id="lastName"
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.lastName}
			/>
			{formik.touched.lastName && formik.errors.lastName ? (
				<div style={{ color: "red" }}>{formik.errors.lastName}</div>
			) : null}
			<label htmlFor="email">E-Mail</label>
			<input
				type="email"
				name="email"
				id="email"
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.email}
			/>
			{formik.touched.email && formik.errors.email ? (
				<div style={{ color: "red" }}>{formik.errors.email}</div>
			) : null}
			<label htmlFor="password">Password</label>
			<input
				type="text"
				name="password"
				id="password"
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.password}
			/>
			{formik.touched.password && formik.errors.password ? (
				<div style={{ color: "red" }}>{formik.errors.password}</div>
			) : null}
			<div className="button-container">
				<button type="submit">Sign up</button>
			</div>
		</form>
	);
};

export default SignUpForm;
