import { Fragment } from "react";
import SalesTrend from "./sales-trend";
import Summary from "./summary";
import { Product } from "../features/getProduct/productSlice";

function ProductContainer(props: any) {
  const product = createProduct(props.data);

  return (
    <Fragment>
      <div className="product-column">
        <Summary item={product} />
      </div>
      <div className="sales-column">
        <SalesTrend sales={product.sales} />
      </div>
    </Fragment>
  );
}

function createProduct(productData: any): Product {
  return {
    title: productData["title"],
    image: productData["image"],
    subtitle: productData["subtitle"],
    tags: productData["tags"],
    sales: productData["sales"],
  };
}

export default ProductContainer;
