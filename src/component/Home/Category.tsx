import { Icatogry } from "../../types/ICatogry";

export default function Category({ category }: { category: Icatogry }) {
  return (
    <>
      <div className="block rounded-lg mr-8 mb-4 w-3/4 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <img className="rounded-t-lg" src={category.image} alt="" />

        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {category.name}
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {category.creationAt}
          </p>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {category.updatedAt}
          </p>
        </div>
      </div>
    </>
  );
}
