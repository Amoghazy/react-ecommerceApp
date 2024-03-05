import { jwtDecode } from "jwt-decode";
import { useSelector } from "react-redux";
import IProduct from "../../types/IProduct";
import "./profile.css";
import { useQuery } from "react-query";
import axios from "axios";
import "core-js/stable/atob";
import avatar from "../../assets/avatar.png";
export default function Profile() {
  const headers = {
    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
  };

  const token = useSelector(
    (state: { token: string; products: IProduct[] }) => state.token
  );

  const decoded: { id: string } = jwtDecode(token);
  const id = decoded.id;
  console.log(decoded, id);
  const { data, isLoading, isError } = useQuery(
    ["updateUser", id],
    async () => {
      const data = await axios.post(
        `https://e-commerce-app-dkd7.onrender.com/api/user/update/${id}`,
        {},
        { headers }
      );
      return data.data;
    },

    {
      onSuccess(res) {
        console.log(res);
      },
      onError(err) {
        console.log(err);
      },
    }
  );
  if (isLoading)
    return (
      <>
        <div className="justify-center min-h-screen items-center flex">
          Loading...
          <div
            className="inline-block  h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          ></div>
        </div>
      </>
    );
  if (isError) return <div>Error</div>;
  const user = data.userUpdated;
  return (
    <div className="container-fluid min-h-screen">
      <div className="w-full bg-primary h-60"></div>
      <div className="w-full flex justify-center">
        {" "}
        <img
          className="w-40 h-40 shadow-lg z-10 profile-pic -translate-y-2/3"
          src={avatar}
          alt=""
        />
      </div>
      <div className="w-full flex justify-center -translate-y-16">
        <form className="w-full max-w-sm ">
          <div className="md:flex md:items-center   mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-full-name"
              >
                UserName
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                readOnly
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none"
                id="inline-full-name"
                type="text"
                value={user.userName}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="email"
              >
                Email
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                readOnly
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none"
                id="email"
                type="email"
                placeholder="email"
                value={user.email}
              />
            </div>
          </div>{" "}
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="role"
              >
                Role
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                readOnly
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none"
                id="role"
                type="text"
                placeholder="Role"
                value={user.role}
              />
            </div>
          </div>{" "}
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="city"
              >
                City
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                readOnly
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none"
                id="city"
                type="text"
                placeholder="city"
                value={user.address[0].city}
              />
            </div>
          </div>{" "}
          <div className="md:flex md:items-center  mb-6">
            <div className="md:w-1/3 sm:w-1/4">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="state"
              >
                State
              </label>
            </div>
            <div className="md:w-2/3 sm:w-3/4">
              <input
                readOnly
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none"
                id="state"
                type="text"
                placeholder="state"
                value={user.address[0].state}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="country"
              >
                Country
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                readOnly
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none"
                id="country"
                type="text"
                placeholder="state"
                value={user.address[0].country}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="zip"
              >
                ZipCode
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                readOnly
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none"
                id="zip"
                type="text"
                placeholder="code"
                value={user.address[0].zipCode}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
