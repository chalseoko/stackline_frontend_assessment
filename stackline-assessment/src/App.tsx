import "./css/App.css";
import SalesTrend from "./components/sales-trend";
import { Product } from "./components/product";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { fetchProductData } from "./features/fetchProduct/productSlice";
import { Banner } from "./components/banner";

function App() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.data);
  const loading = useAppSelector((state) => state.loading);
  const error = useAppSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchProductData());
  }, []);

  console.log(data, loading, error);

  return (
    <div className='stackline-app'>
      <Banner />
      <div className='product-container'>
        <Product />
      </div>
    </div>
  );
}

export default App;
