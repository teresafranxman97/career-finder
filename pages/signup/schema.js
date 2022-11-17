import * as yup from "yup";

const schema = yup.object().shape({
	firstName: yup
		.string()
		.max(50, "Must be 40 characters or less")
		.required("*First name required"),
	lastName: yup
		.string()
		.max(50, "Must be 40 characters or less")
		.required("*Last name required"),
	email: yup.string().email().required("*E-Mail required"),
	password: yup.string().required("*Password required"),
});

export default schema;
