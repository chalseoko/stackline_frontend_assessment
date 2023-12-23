import { fetchProductData, getFetchSuccess, getFetchError } from "./productSlice";
const jsonFilePath = "./../src/data/stackline_product_data.json";

// This is the implementation of the JSON API
export function fetchData() {
  return async (dispatch: any) => {
    dispatch(fetchProductData());

    try {
      const response = await fetch(jsonFilePath);
      const data = await response.json();
      dispatch(getFetchSuccess(data[0]));
    } catch (error) {
      dispatch(getFetchError((error as Error).message));
    }
  };
};

