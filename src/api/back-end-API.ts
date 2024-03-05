import { LoginData, dataToApi } from "../types/Iuser";
import axios from "axios";

const API = axios.create({
  baseURL: "https://e-commerce-app-dkd7.onrender.com",
});
export const login = async (data: LoginData) => {
  const res = await API.post("/api/user/signin", data);
  return res.data;
};

export const register = async (data: dataToApi) => {
  const res = await API.post("/api/user/signup", data);
  return res.data;
};

export const forget = async (data: { email: string }) => {
  const res = await API.post("/api/user/forgetpassword", data);
  return res.data;
};
