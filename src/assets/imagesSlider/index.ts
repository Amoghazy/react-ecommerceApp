import photo1 from "./1 (1).jpg";
import photo2 from "./1 (3).jpg";
import photo3 from "./1 (4).jpg";
import photo4 from "./1 (5).jpg";

type ImagesType = {
  [key: string]: string;
};

// Then use ImagesType instead of the original type of images
const images: ImagesType = {
  photo1,
  photo2,
  photo3,
  photo4,
};
export default images;
