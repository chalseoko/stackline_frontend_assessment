import {
  fetchProductData,
  getFetchSuccess,
  getFetchError,
} from "./productSlice"

// This is the implementation of the JSON API
export function fetchData() {
  return async (dispatch: any) => {
    dispatch(fetchProductData())

    try {
      const response = await fetch("/stackline_product_data.json")
      const data = await response.json()
      dispatch(getFetchSuccess(data[0]))
    } catch (error) {
      dispatch(getFetchError((error as Error).message))
    }
  }
}
