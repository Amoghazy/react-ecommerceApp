import { useFormik } from "formik";
import schema from "./ValidationYup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./Registration.css";
import { TEAlert, TEInput, TERipple } from "tw-elements-react";
import { IUserRegistration, IAddress, dataToApi } from "../../../types/Iuser";
import { useMutation } from "react-query";
import { register } from "../../../api/back-end-API";
import SVGXsign from "../../../assets/SVGXsign";
import { Helmet } from "react-helmet-async";

export default function Register() {
  const navigate = useNavigate();
  const alert = document.getElementById("error");

  const { mutate } = useMutation(register);

  const sendData = (data: IUserRegistration) => {
    const {
      userName,
      email,
      // invalid,
      password,
      confirmPassword,
      country,
      city,
      state,
      zipCode,
    } = data;
    const info = { userName, email, password, confirmPassword };
    const address: IAddress = { country, city, state, zipCode };
    const SenddataToApi: dataToApi = { ...info, address: [address] };
    alert?.classList.add("d-none");

    axios
      .post(
        "https://e-commerce-app-dkd7.onrender.com/api/user/signup",
        SenddataToApi
      )
      .then((res) => {
        console.log(res);
        if (res.status == 201 && res.statusText == "Created") {
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);

        alert?.classList.remove("d-none");
        if (alert) {
          alert.innerText = `${err.response.data.error}`;
        }
      });

    mutate(SenddataToApi, {});
  };

  const {
    handleChange,
    handleSubmit,
    isValid,
    handleBlur,
    touched,

    errors,
  } = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
      country: "",
      city: "",
      state: "",
      zipCode: "",
    },
    validationSchema: schema,
    onSubmit: sendData,
  });
  console.log(errors);
  console.log(isValid);

  return (
    <>
      <Helmet>
        <title>Registeration</title>
        <meta name="description" content="Registeration page " />
      </Helmet>
      <div className="block max-w-sm rounded-lg m-auto mt-5 mb-5 bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <form onSubmit={handleSubmit}>
          <div className="typing">
            {" "}
            <p className="text-center register">
              Registration <i className="bi text-dark mt-2 bi-back"></i>
            </p>
          </div>
          <TEInput
            // invalid={touched.userName && errors.userName}
            onBlur={handleBlur}
            type="text"
            className="mt-3"
            label="userName"
            id="userName"
            name="userName"
            onChange={handleChange}
          ></TEInput>
          {errors.userName && touched.userName && (
            <TEAlert
              staticAlert
              open={true}
              color="bg-danger-100 text-danger-700"
              style={{
                marginTop: "10px ",

                padding: "0.5rem",
                marginBottom: "0px",
              }}
            >
              <SVGXsign />

              {errors.userName}
            </TEAlert>
          )}

          <TEInput
            type="email"
            label="Email"
            onBlur={handleBlur}
            className="mt-5 "
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

                padding: "0.5rem",
                marginBottom: "0px",
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
            id="inputPassword3"
            onChange={handleChange}
            label="Password"
            className="mt-5 mb-6"
          ></TEInput>
          {errors.password && touched.password && (
            <TEAlert
              style={{
                padding: "0.5rem",
                marginBottom: "0px",
              }}
              staticAlert
              open={true}
              color="bg-danger-100 text-danger-700"
            >
              <SVGXsign />

              {errors.password}
            </TEAlert>
          )}
          <TEInput
            type="password"
            onBlur={handleBlur}
            name="confirmPassword"
            id="inputConfirmPassword"
            onChange={handleChange}
            label="Confirm Password"
            className="mt-5 mb-6"
          ></TEInput>
          {errors.confirmPassword && touched.confirmPassword && (
            <TEAlert
              style={{
                padding: "0.5rem",
                marginBottom: "0px",
              }}
              staticAlert
              open={true}
              color="bg-danger-100 text-danger-700"
            >
              <SVGXsign />

              {errors.confirmPassword}
            </TEAlert>
          )}

          <TEInput
            type="text"
            onBlur={handleBlur}
            name="country"
            aria-label="Country"
            id="inputCountry"
            label="Country"
            onChange={handleChange}
            className="mt-5 mb-6"
          ></TEInput>
          {errors.country && touched.country && (
            <TEAlert
              style={{
                padding: "0.5rem",
                marginBottom: "0px",
              }}
              staticAlert
              open={true}
              color="bg-danger-100 text-danger-700"
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

              {errors.country}
            </TEAlert>
          )}

          <TEInput
            type="text"
            onBlur={handleBlur}
            name="city"
            label="City"
            aria-label="City"
            onChange={handleChange}
            className="mt-5 mb-6"
          ></TEInput>
          {errors.city && touched.city && (
            <TEAlert
              style={{
                padding: "0.5rem",
                marginBottom: "0px",
              }}
              staticAlert
              open={true}
              color="bg-danger-100 text-danger-700"
            >
              <SVGXsign />

              {errors.city}
            </TEAlert>
          )}
          <TEInput
            type="text"
            onBlur={handleBlur}
            name="state"
            label="State"
            aria-label="State"
            id="inputState"
            onChange={handleChange}
            className="mt-5 mb-6"
          ></TEInput>
          {errors.state && touched.state && (
            <TEAlert
              style={{
                padding: "0.5rem",
                marginBottom: "0px",
              }}
              staticAlert
              open={true}
              color="bg-danger-100 text-danger-700"
            >
              <SVGXsign />

              {errors.state}
            </TEAlert>
          )}
          <TEInput
            type="text"
            onBlur={handleBlur}
            name="zipCode"
            label="zipCode"
            aria-label="zipCode"
            onChange={handleChange}
            className="mt-5 mb-6"
          ></TEInput>
          {errors.zipCode && touched.zipCode && (
            <TEAlert
              style={{
                padding: "0.5rem",
                marginBottom: "0px",
              }}
              staticAlert
              open={true}
              color="bg-danger-100 text-danger-700"
            >
              <SVGXsign />

              {errors.zipCode}
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
          <TERipple rippleColor="light">
            <button
              type="submit"
              disabled={!isValid || Object.keys(errors).length > 0}
              className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            >
              Sign Up
            </button>
          </TERipple>
        </form>
      </div>{" "}
    </>
  );
}
