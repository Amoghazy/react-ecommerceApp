import { Link } from "react-router-dom";

export default function Butt() {
  return (
    <>
      <div className="  rounded-2xl   cursor-pointer  overflow-hidden transform hover:scale-y-105 transition duration-300 ease-out">
        <Link
          to={"/products"}
          type="button"
          className="text-white rounded-full bg-gradient-to-r   from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium  text-sm px-5 py-2.5 text-center me-2 mb-2 w-36"
        >
          <span className="flex justify-between items-center  ">
            Shop Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </span>
        </Link>
      </div>
    </>
  );
}
