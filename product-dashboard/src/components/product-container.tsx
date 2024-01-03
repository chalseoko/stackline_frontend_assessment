import { createProduct } from "../utils/product";
import SalesTrend from "./sales-trend";
import Summary from "./summary";

function ProductContainer(props: any) {
  const product = createProduct(props.data);

  return (
    <>
      <div className="product-column">
        <Summary item={product} />
      </div>
      <div className="sales-column">
        <SalesTrend sales={product.sales} />
      </div>
    </>
  );
}

export default ProductContainer;
