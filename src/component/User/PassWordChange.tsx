import { useNavigate } from "react-router-dom";
import myLogo from "../../assets/undraw_done_re_oak4.svg";

export default function PassWordChange() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-center items-center mt-6 flex-col">
        <img src={myLogo} alt="" className="w-1/3" />
        <h1 className="text-5xl font-bold block mt-2">Password Update! </h1>
        <p className="text-3xl block mt-1">
          Your password has been change successfully
        </p>
        <button
          onClick={() => {
            navigate("/login");
          }}
          type="button"
          className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] mt-2 dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        >
          Go Back to Login
        </button>
      </div>
    </>
  );
}
