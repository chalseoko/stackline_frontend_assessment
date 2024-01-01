import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import ProductContainer from "./components/product-container";
import { getProduct } from "./features/getProduct/productSlice";
import Banner from "./components/banner";
import "./App.css";

function App() {
  const dispatch = useAppDispatch();
  const { data, loading } = useAppSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  if (loading)
    return (<p>Dashboard loading...</p>)

  return (
    <div className="product-dashboard">
      <Banner />
      <div className="product-container">
        {!loading && data && data.length != 0 && (
          <ProductContainer data={data} />
        )}
      </div>
    </div>
  );
}

export default App;
