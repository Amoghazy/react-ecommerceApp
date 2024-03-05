import IProduct from "./IProduct";
export interface Icart {
  id: number;
  title: string;
  quantity: number;
  price: number;
  image: string;
}
export interface Istate {
  token: string;
  products: IProduct[];
  cart: Icart[];
}
