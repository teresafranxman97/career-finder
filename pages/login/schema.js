import * as yup from "yup";

const schema = yup.object().shape({
    email: yup.string().email().required("*E-Mail is required"),
    password: yup.string().required("*Password is required")
})

export default schema;