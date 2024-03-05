import bag from "./bag.svg";
import cart from "./cart.svg";
import cross from "./cross.svg";
import returns from "./return.svg";
import support from "./support.svg";
import truck from "./truck.svg";
import shop from "./Free Vector _ Online shop neon sign.jpg";

type ImagesType = {
  [key: string]: string;
};

// Then use ImagesType instead of the original type of images
const homeImages: ImagesType = {
  bag,
  cart,
  cross,
  returns,
  support,
  truck,
  shop,
};
export default homeImages;
