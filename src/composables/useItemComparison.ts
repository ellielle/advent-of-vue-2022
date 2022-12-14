import { computed, ref } from "vue";
import { fetchItems, Products } from "./useFetchProducts";

export const useItemComparison = () => {
  const firstProduct = ref<Products>();
  const secondProduct = ref<Products>();
  const productList = ref<Products[]>([]);

  const getProducts = async () => {
    productList.value = await fetchItems();
  };

  const comparison = computed(() => {
    if (!firstProduct.value || !secondProduct.value) {
      return { message: "" };
    }
    return compareProducts(firstProduct.value, secondProduct.value);
  });

  getProducts().catch((error) => {
    console.log(error);
  });

  return {
    firstProduct,
    secondProduct,
    productList,
    comparison
  };
};

const compareProducts = (product1: Products, product2: Products) => {
  if (product1.id === product2.id) {
    return { message: "These are the same items" };
  }
  const [highPrice, lowPrice] = [product1, product2].sort((a, b) =>
    a.price < b.price ? 1 : -1
  );
  const pricesCompared = Math.floor(highPrice.price / lowPrice.price);

  return { message: `You can get ${ pricesCompared } ${ lowPrice.title } for about the same price as a single ${ highPrice.title }.` };
};