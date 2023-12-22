import SalesTrend from "./sales-trend";
import { Summary } from "./summary";

export function Product() {
    return (
        <div className='product-container'>
            <div className='product-column'>
                <Summary />
            </div>
            <div className='sales-column'>
                <SalesTrend />
                {/* <SalesTable /> */}
            </div>
        </div>
    )
}
