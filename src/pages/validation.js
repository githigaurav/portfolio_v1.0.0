import * as yup from "yup"

const inqueryValidation = new yup.ObjectSchema({
    name:yup.string().required("Name is required"),
    email:yup.string().email("A Valid emai is required").required("Email is required"),
    message:yup.string().required("Message is required")
})


export {inqueryValidation}