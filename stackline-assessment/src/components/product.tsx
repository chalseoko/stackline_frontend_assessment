import { Fragment } from "react"
import SalesTrend from "./sales-trend"
import Summary from "./summary"
import { Item } from "../features/fetchProduct/productConstants"

function Product(props: any) {
  const summary = createProductSummary(props.data)
  const sales = props.data["sales"]

  return (
    <Fragment>
      <div className="product-column">
        <Summary item={summary} />
      </div>
      <div className="sales-column">
        <SalesTrend sales={sales} />
      </div>
    </Fragment>
  )
}

function createProductSummary(productData: any): Item {
  return {
    title: productData["title"],
    img: productData["image"],
    subtitle: productData["subtitle"],
    tags: productData["tags"],
  }
}

export default Product
