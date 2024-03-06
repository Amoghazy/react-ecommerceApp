import CarouselWithControls from "./Carsoual";
import CategorySlider from "./CategorySlider";
import Why from "./Why";
import Banner from "./Banner";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Home page for website ecom app" />
      </Helmet>
      <CarouselWithControls />
      <div className="container p-5 flex justify-center flex-col items-center m-auto">
        <CategorySlider />
        <Banner />

        <Why />
      </div>
    </>
  );
}
