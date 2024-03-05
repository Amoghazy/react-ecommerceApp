export default function Banner() {
  return (
    <div className="container relative p-5 mt-4 bg-black w-full h-64">
      <div className=" p-2 inline-block">
        <h2 className="text-3xl font-bold text-white">
          Enhance Your <br />
          Mobile Experience
        </h2>
      </div>

      <div className=" p-2 inline-block absolute top-0.5 right-0">
        <img
          src="https://imgur.com/yb9UQKL.jpg"
          className="w-72 h-64 shadow-2xl shadow-black "
          alt=""
        />
      </div>
      <button className="block rounded-full border-2 border-success px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-success-600 focus:border-success-600 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10">
        Buy Now
      </button>
    </div>
  );
}
