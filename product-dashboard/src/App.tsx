import "./App.css";
// import Product from "./components/product"
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import Banner from "./components/banner";
import ProductContainer from "./components/product-container";
import { fetchProductData, getFetchError, getFetchSuccess } from "./features/product/productSlice";

function App() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.data);
  const error = useAppSelector((state) => state.error);
  const loading = useAppSelector((state) => state.loading);

  useEffect(() => {
    fetchData()
  }, [dispatch]);

  console.log(data, error, loading);

  return (
    <div className="product-dashboard">
      <Banner />
      <div className="product-container">
      { !loading && data && data.length != 0 && <ProductContainer data={data} />}
      </div>
    </div>
  );
}

function fetchData() {
  return async (dispatch: any) => {
    dispatch(fetchProductData());
    try {
      const response = await fetch("./assets/stackline_product_data.json");
      const data = await response.json();
      console.log(data)
      dispatch(getFetchSuccess(data[0]));
    } catch (error) {
      dispatch(getFetchError((error as Error).message));
    }
  };
}

export default App;
