// import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { useFormik } from "formik";
import { TEAlert, TEInput, TERipple } from "tw-elements-react";
import * as Yup from "yup";
import ".././Registration/Registration.css";
import {
  ApiResponseError,
  ApiResponseSuccess,
  LoginData,
} from "../../../types/Iuser";

import { useMutation } from "react-query";
import { login } from "../../../api/back-end-API";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../../RTK/Slices/tokenSlice";
import { Link, useNavigate } from "react-router-dom";
import ".././Registration/Registration.css";

import SVGXsign from "../../../assets/SVGXsign";
import { Helmet } from "react-helmet-async";

export default function Login() {
  const navigate = useNavigate();
  const token = useSelector((state: { token: string }) => state.token);

  console.log(token, "Loginpage");
  const dispatch = useDispatch();
  const alert = document.getElementById("error");
  const { mutate } = useMutation(login, {
    onSuccess: (res: ApiResponseSuccess) => {
      if (res.status == "Login SUCCESS") {
        dispatch(setToken(res.token));
        navigate("/");
      }
    },
    onError: (err: AxiosError) => {
      console.log(err);
      alert?.classList.remove("hidden");

      console.log((err.response?.data as ApiResponseError)?.status);
      if (alert) {
        alert.innerHTML =
          (err.response?.data as ApiResponseError).error || "Some error";
      }
    },
  });
  const sendDataLogin = (data: LoginData) => {
    alert?.classList.add("hidden");
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
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
    }),
    onSubmit: sendDataLogin,
  });
  return (
    <>
      {" "}
      <Helmet>
        <title>LoginPage</title>
        <meta name="description" content="LoginPage for user" />
      </Helmet>
      <div className="block max-w-sm rounded-lg m-auto mt-32 mb-40 bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <form onSubmit={handleSubmit}>
          <div className="typing">
            {" "}
            <p className="text-center register">Login</p>
          </div>
          <TEInput
            type="email"
            label="Email"
            onBlur={handleBlur}
            className="mt-12 "
            placeholder="Email"
            name="email"
            id="inputEmail"
            onChange={handleChange}
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
              <SVGXsign />

              {errors.email}
            </TEAlert>
          )}
          <TEInput
            type="password"
            onBlur={handleBlur}
            name="password"
            placeholder="Password"
            id="inputPassword3"
            onChange={handleChange}
            label="Password"
            className="mt-5 mb-6"
          ></TEInput>
          {errors.password && touched.password && (
            <TEAlert
              style={{
                padding: "0.75rem 1rem",
              }}
              staticAlert
              open={true}
              color="bg-danger-100 text-danger-700"
            >
              <SVGXsign />

              {errors.password}
            </TEAlert>
          )}
          <TEAlert
            id="error"
            staticAlert
            open={true}
            color="bg-danger-100 hidden text-danger-700"
          >
            <SVGXsign />
          </TEAlert>
          <p>
            <Link to="/forgotPassword" className="text-primary underline">
              {" "}
              Forgot Password
            </Link>
          </p>
          <TERipple rippleColor="light">
            <button
              type="submit"
              className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            >
              Submit
            </button>
          </TERipple>
        </form>
      </div>
    </>
  );
}
