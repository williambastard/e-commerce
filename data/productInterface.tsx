export interface productRating {
  rate: number;
  count: number;
}

export interface productInterface {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discount: number;
  image: string;
  stock:number;
  rating: productRating;
}
