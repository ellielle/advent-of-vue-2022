export interface Products {
  id: number;
  price: number;
  title: string;
}

export const fetchItems = async () => {
  const url = "https://dummyjson.com/products";
  const response = await fetch(url);
  const data = await response.json();
  return data.products as Products[];
};