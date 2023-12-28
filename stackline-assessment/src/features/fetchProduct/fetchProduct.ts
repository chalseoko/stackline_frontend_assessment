import {
  fetchProductData,
  getFetchSuccess,
  getFetchError,
} from "./productSlice"
const jsonFilePath = "./../src/data/stackline_product_data.json"

// This is the implementation of the JSON API
export function fetchData() {
  return async (dispatch: any) => {
    dispatch(fetchProductData())

    try {
      const response = await fetch(jsonFilePath, {
        headers: {
          Method: "GET",
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-Content-Type-Options": "nosniff",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, GET , DELETE , PUT , OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      })
      const data = await response.json()
      dispatch(getFetchSuccess(data[0]))
    } catch (error) {
      dispatch(getFetchError((error as Error).message))
    }
  }
}
