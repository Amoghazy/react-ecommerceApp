import React from "react";
import { useSelector } from "react-redux";
import IProduct from "../types/IProduct";
import { Navigate } from "react-router-dom";

export default function Gurd(props: { children: React.ReactNode }) {
  const token = useSelector(
    (state: { token: string; products: IProduct[] }) => state.token
  );
  console.log(token);
  if (token) {
    return <>{props.children}</>;
  } else {
    return <Navigate to={"/login"} />;
  }
}
