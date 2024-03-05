import { TECarousel, TECarouselItem } from "tw-elements-react";
import images from "../../assets/imagesSlider";
import Butt from "./Butt";
export default function CarouselWithControls(): JSX.Element {
  return (
    <>
      <TECarousel showControls crossfade ride="carousel">
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          {Object.keys(images).map((key, index) => (
            <TECarouselItem
              key={index}
              itemID={index + 1}
              className="relative float-left -mr-[100%] hidden w-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <img src={images[key]} className="block w-full h-96" alt="..." />
              <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                <Butt />
              </div>
            </TECarouselItem>
          ))}
        </div>
      </TECarousel>
    </>
  );
}
