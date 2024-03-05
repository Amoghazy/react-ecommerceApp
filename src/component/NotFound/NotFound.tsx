import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen justify-center flex-col">
      <h1 className="text-5xl mb-3 font-bold text-center">404 NOT FOUND </h1>
      <p className="text-lg font-semibold text-center ">
        this Page Not Exist ,Should Back To Home{" "}
      </p>
      <div className="flex justify-center mt-2 text-white">
        <button className="   bg-info px-3 py-1.5 text-sm hover:bg-info-600 ">
          <Link to={"/"}> Back To Home</Link>
        </button>
      </div>
    </div>
  );
}
