import { Fragment } from "react";
import SalesTrend from "./sales-trend";
import { Summary } from "./summary";

export function Product() {
    return (
        <Fragment>
            <div className='product-column'>
                <Summary />
            </div>
            <div className='sales-column'>
                <SalesTrend />
                {/* <SalesTable /> */}
            </div>
        </Fragment>
    )
}
