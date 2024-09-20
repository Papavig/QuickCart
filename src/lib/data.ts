import shoe from "@/assets/images/product-1.jpg";
export interface Product {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Product Title 1",
    price: 299.99,
    imageUrl: shoe,
  },
  {
    id: 2,
    title: "Product Title 2",
    price: 399.99,
    imageUrl: shoe,
  },
  {
    id: 3,
    title: "Product Title 3",
    price: 499.99,
    imageUrl: shoe,
  },
  {
    id: 4,
    title: "Product Title 4",
    price: 599.99,
    imageUrl: shoe,
  },
  {
    id: 5,
    title: "Product Title 1",
    price: 299.99,
    imageUrl: shoe,
  },
  {
    id: 6,
    title: "Product Title 2",
    price: 399.99,
    imageUrl: shoe,
  },
];
