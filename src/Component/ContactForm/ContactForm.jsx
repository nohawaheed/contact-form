import React from "react";
import Style from "./ContactForm.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import successIcon from "../../Assets/images/icon-success-check.svg";

export default function ContactForm() {
  let formSchema = Yup.object({
    firstName: Yup.string().required("This field is required"),
    lastName: Yup.string().required("This field is required"),
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("This field is required"),
    query: Yup.string().oneOf(
      ["General Enquiry", "Support Request"],
      "Please select a query type"
    ),
    message: Yup.string().required("This field is required"),
    consent: Yup.boolean().oneOf(
      [true],
      "To submit this form, please consent to being contacted"
    ),
  });
  let [isFormSubmitted, setIsFormSubmitted] = React.useState(false);
  let formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      query: false,
      message: "",
      consent: false,
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      setIsFormSubmitted(true);
      setTimeout(() => {
        setIsFormSubmitted(false);
      }, 2000);
      formik.resetForm();
    },
  });

  return (
    <>
      <main
        className={` ${Style.main_color} position-relative w-100 d-flex justify-content-center align-items-center min-vh-100 container-fluid`}
      >
        <form
          onSubmit={formik.handleSubmit}
          className="w-lg-50 mx-auto bg-white p-4 border rounded-4"
        >
          <h1 className={`h5 fw-bold mb-3 ${Style.header_color}`}>
            Contact Us
          </h1>
          <div className={`row mb-3`}>
            <div className="col-lg-6">
              <label htmlFor="firstName" className="form-label">
                First Name
                <span
                  style={
                    formik.touched.firstName && formik.errors.firstName
                      ? { color: `var(--red)` }
                      : { color: `var(--green)` }
                  }
                >
                  *
                </span>
              </label>
              <input
                style={
                  formik.touched.firstName && formik.errors.firstName
                    ? { border: `1px solid var(--red)` }
                    : formik.touched.firstName && !formik.errors.firstName
                    ? { border: `1px solid var(--green)` }
                    : null
                }
                className="form-control"
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                onChange={formik.handleChange}
                type="text"
                name="firstName"
                id="firstName"
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className="text-danger">{formik.errors.firstName}</div>
              ) : null}
            </div>
            <div className="col-lg-6">
              <label htmlFor="lastName" className="form-label">
                Last Name
                <span
                  style={
                    formik.touched.lastName && formik.errors.lastName
                      ? { color: `var(--red)` }
                      : { color: `var(--green)` }
                  }
                >
                  *
                </span>
              </label>
              <input
                style={
                  formik.touched.lastName && formik.errors.lastName
                    ? { border: `1px solid var(--red)` }
                    : formik.touched.lastName && !formik.errors.lastName
                    ? { border: `1px solid var(--green)` }
                    : null
                }
                className="form-control"
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                onChange={formik.handleChange}
                type="text"
                name="lastName"
                id="lastName"
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className="text-danger">{formik.errors.lastName}</div>
              ) : null}
            </div>
          </div>

          <div className={`col-12 mb-3`}>
            <label htmlFor="email" className="form-label">
              Email Address
              <span
                style={
                  formik.touched.email && formik.errors.email
                    ? { color: `var(--red)` }
                    : { color: `var(--green)` }
                }
              >
                *
              </span>
            </label>
            <input
              style={
                formik.touched.email && formik.errors.email
                  ? { border: `1px solid var(--red)` }
                  : formik.touched.email && !formik.errors.email
                  ? { border: `1px solid var(--green)` }
                  : null
              }
              className="form-control"
              onBlur={formik.handleBlur}
              value={formik.values.email}
              onChange={formik.handleChange}
              type="text"
              name="email"
              id="email"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-danger">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="row">
            <label htmlFor="query" className="form-label col-12">
              Query Type
              <span
                style={
                  formik.touched.query && formik.errors.query
                    ? { color: `var(--red)` }
                    : { color: `var(--green)` }
                }
              >
                *
              </span>
            </label>
            <div className="col-lg-6 mb-3">
              <div
                className="form-check form-control ps-5"
                style={
                  formik.values.query === "General Enquiry"
                    ? {
                        border: `1px solid var(--green)`,
                        background: `var(--light-green)`,
                      }
                    : null
                }
              >
                <input
                  style={
                    formik.touched.query && formik.errors.query
                      ? { border: `1px solid var(--red)` }
                      : formik.touched.query && !formik.errors.query
                      ? {
                          border: `1px solid var(--green)`,
                        }
                      : null
                  }
                  className="form-check-input"
                  type="radio"
                  name="query"
                  id="flexRadioDefault1"
                  value="General Enquiry"
                  checked={formik.values.query === "General Enquiry"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <label
                  className="form-check-label w-100"
                  htmlFor="flexRadioDefault1"
                >
                  General Enquiry
                </label>
              </div>
            </div>
            <div className="col-lg-6 mb-3">
              <div
                className="form-check form-control ps-5"
                style={
                  formik.values.query === "Support Request"
                    ? {
                        border: `1px solid var(--green)`,
                        background: `var(--light-green)`,
                      }
                    : null
                }
              >
                <input
                  style={
                    formik.touched.query && formik.errors.query
                      ? { border: `1px solid var(--red)` }
                      : formik.touched.query && !formik.errors.query
                      ? {
                          border: `1px solid var(--green)`,
                        }
                      : null
                  }
                  className="form-check-input"
                  type="radio"
                  name="query"
                  id="flexRadioDefault2"
                  value="Support Request"
                  checked={formik.values.query === "Support Request"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <label
                  className="form-check-label w-100"
                  htmlFor="flexRadioDefault2"
                >
                  Support Request
                </label>
              </div>
            </div>
          </div>
          {formik.touched.query && formik.errors.query ? (
            <div className="text-danger">{formik.errors.query}</div>
          ) : null}
          <div className="col-12 mb-3">
            <label htmlFor="message" className="form-label">
              Message
              <span
                style={
                  formik.touched.message && formik.errors.message
                    ? { color: `var(--red)` }
                    : { color: `var(--green)` }
                }
              >
                *
              </span>
            </label>
            <textarea
              style={
                formik.touched.message && formik.errors.message
                  ? { border: `1px solid var(--red)` }
                  : formik.touched.message && !formik.errors.message
                  ? { border: `1px solid var(--green)` }
                  : null
              }
              className="form-control"
              onBlur={formik.handleBlur}
              value={formik.values.message}
              onChange={formik.handleChange}
              name="message"
              id="message"
            />
            {formik.touched.message && formik.errors.message ? (
              <div className="text-danger">{formik.errors.message}</div>
            ) : null}
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              name="consent"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              checked={formik.values.consent}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              I consent to being contacted by the team
              <span
                style={
                  formik.touched.consent && formik.errors.consent
                    ? { color: `var(--red)` }
                    : { color: `var(--green)` }
                }
              >
                *
              </span>
            </label>
            {formik.touched.consent && formik.errors.consent ? (
              <div className="text-danger">{formik.errors.consent}</div>
            ) : null}
          </div>
          <button
            disabled={!(formik.isValid && formik.dirty)}
            type="submit"
            className={`${Style.btn_color} text-white btn col-12`}
          >
            Submit
          </button>
        </form>
        {isFormSubmitted ? (
          <div
            className={`${Style.success_color} position-absolute top-0 mt-4 left-50 text-white p-3 rounded-3`}
          >
            <p className="h6 fw-bold d-flex align-items-center">
              <img
                src={successIcon}
                alt="check icon"
                className={`me-2 ${Style.icon}`}
              />
              Message Sent!
            </p>
            <p className={`h6 small ${Style.text_color}`}>
              Thanks for completing the form. We'll be in touch soon!
            </p>
          </div>
        ) : null}
      </main>
    </>
  );
}
