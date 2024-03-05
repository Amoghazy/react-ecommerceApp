interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: number;
  image: string;
  rating: {
    count: string;
    rate: string;
  };
}

export default IProduct;
