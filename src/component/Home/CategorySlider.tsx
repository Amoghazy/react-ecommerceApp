import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Category from "./Category";
import { useQuery } from "react-query";
import axios from "axios";
import { Icatogry } from "../../types/ICatogry";

export default function CategorySlider() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const { data, isLoading, isError } = useQuery(
    "cateogry",
    () => {
      return axios.get("https://api.escuelajs.co/api/v1/categories");
    },
    {
      select(data) {
        return {
          data: data.data.filter((cat: Icatogry) =>
            cat.image.includes("https://i.imgur.com")
          ),
        };
      },
    }
  );
  if (isLoading)
    return (
      <>
        Loading...
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        ></div>
      </>
    );
  if (isError) return <div>Error</div>;

  return (
    <>
      <section className="container w-full p-8">
        <div className="text-center mb-5 ">
          <h1 className="text-5xl font-bold block mt-2 ">Category </h1>
          <p>Some Cateogry </p>
        </div>
        <div className=" w-full">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all 0.5"
            transitionDuration={500}
            showDots={true}
          >
            {data?.data.map((item: Icatogry) => (
              <Category key={item.id} category={item} />
            ))}
          </Carousel>
        </div>
      </section>
    </>
  );
}
