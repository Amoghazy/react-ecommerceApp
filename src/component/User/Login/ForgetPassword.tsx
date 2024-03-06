import { TEAlert, TEInput } from "tw-elements-react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { forget } from "../../../api/back-end-API";
import { useFormik } from "formik";
import ".././Registration/Registration.css";

import { ApiResponseError, forgetPasswordData } from "../../../types/Iuser";
import { AxiosError } from "axios";
import { Helmet } from "react-helmet-async";
function ForgetPassword() {
  const navigate = useNavigate();
  const alert = document.getElementById("error");
  const { mutate } = useMutation(forget, {
    onSuccess: () => {
      navigate("/passwordchanged");
    },
    onError: (err: AxiosError) => {
      alert?.classList.remove("hidden");

      if (alert) {
        alert.innerHTML =
          (err.response?.data as ApiResponseError).error || "Some error";
      }
    },
  });

  const forgetPassword = (data: forgetPasswordData) => {
    mutate(data);
  };
  const {
    handleChange,
    handleSubmit,

    handleBlur,
    touched,

    errors,
  } = useFormik({
    initialValues: {
      email: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid email").required("Email is required"),
      newPassword: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("newPassword")], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: forgetPassword,
  });

  return (
    <>
      <Helmet>
        <title>ForgetPassword</title>
        <meta name="description" content="ForgetPassword page " />
      </Helmet>
      <div className="block max-w-sm rounded-lg m-auto mt-32 mb-40 bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <form onSubmit={handleSubmit}>
          <div className="typing">
            {" "}
            <p className="text-center register">
              Please Enter Email<p>and reset your password</p>
            </p>
          </div>
          <TEInput
            onChange={handleChange}
            onBlur={handleBlur}
            type="email"
            label="Email"
            className="mt-12 "
            name="email"
            id="inputEmail"
          ></TEInput>
          {errors.email && touched.email && (
            <TEAlert
              staticAlert
              open={true}
              color="bg-danger-100 text-danger-700"
              style={{
                marginTop: "10px ",

                padding: "0.75rem 1rem",
              }}
            >
              <span className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              {errors.email}
            </TEAlert>
          )}
          <TEInput
            onChange={handleChange}
            onBlur={handleBlur}
            type="password"
            label="newpassword"
            className="mt-6 "
            name="newPassword"
            id="newpassword"
          ></TEInput>
          {errors.newPassword && touched.newPassword && (
            <TEAlert
              staticAlert
              open={true}
              color="bg-danger-100 text-danger-700"
              style={{
                marginTop: "10px ",

                padding: "0.75rem 1rem",
              }}
            >
              <span className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              {errors.newPassword}
            </TEAlert>
          )}
          <TEInput
            onChange={handleChange}
            onBlur={handleBlur}
            type="password"
            label="confirm password"
            className="mt-6 "
            name="confirmPassword"
            id="confirm_password"
          ></TEInput>
          {errors.confirmPassword && touched.confirmPassword && (
            <TEAlert
              staticAlert
              open={true}
              color="bg-danger-100 text-danger-700"
              style={{
                marginTop: "10px ",

                padding: "0.75rem 1rem",
              }}
            >
              <span className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              {errors.confirmPassword}
            </TEAlert>
          )}
          <TEAlert
            id="error"
            staticAlert
            open={true}
            color="bg-danger-100 hidden text-danger-700"
            style={{
              marginTop: "10px ",

              padding: "0.75rem 1rem",
            }}
          >
            <span className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </TEAlert>
          <button
            type="submit"
            className="inline-block mt-3 rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            ResetPassword
          </button>
        </form>
      </div>
    </>
  );
}

export default ForgetPassword;
