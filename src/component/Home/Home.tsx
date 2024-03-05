import CarouselWithControls from "./Carsoual";
import CategorySlider from "./CategorySlider";
import Why from "./Why";
import Banner from "./Banner";


export default function Home() {

  return (
    <>
      <CarouselWithControls />
      <div className="container p-5 flex justify-center flex-col items-center m-auto">
        <CategorySlider />
        <Banner />

        <Why />
      </div>
    </>
  );
}
