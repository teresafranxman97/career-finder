import schema from "./schema";
import { useFormik } from "formik";

const LoginForm = () => {
	const formik = useFormik({
		initialValues: {
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
			<label htmlFor="email">E Mail</label>
			<input
				type="email"
				id="email"
				name="email"
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
				id="password"
				name="password"
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.password}
			/>
			{formik.touched.password && formik.errors.password ? (
				<div style={{ color: "red" }}>{formik.errors.password}</div>
			) : null}
			<div className="button-container">
				<button type="submit">Log In</button>
			</div>
		</form>
	);
};

export default LoginForm;
