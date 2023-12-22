import { fetchProductData, getFetchSuccess, getFetchtError } from "./productSlice";
const jsonFilePath = "./../../data/stackline_product_data.json";

// This is the implementation of the JSON API
export const fetchData = () => {
  return async (dispatch: any) => {
    dispatch(fetchProductData());

    try {
      const response = await fetch(jsonFilePath);
      const data = await response.json();

      dispatch(getFetchSuccess(data));
    } catch (error) {
      dispatch(getFetchtError((error as Error).message));
    }
  };
};

