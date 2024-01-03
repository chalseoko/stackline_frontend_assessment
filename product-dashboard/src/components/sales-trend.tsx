import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import SalesTable from "./sales-table";
import {
  getMonthlySales,
  getTrendOptions,
  setHighChartsOptions,
} from "../utils/trend";

function SalesTrend(props: any) {
  const sales = props.sales;
  const monthlySales = getMonthlySales(sales);
  setHighChartsOptions();

  return (
    <>
      <div className="sales-column-trend">
        <HighchartsReact
          highcharts={Highcharts}
          options={getTrendOptions(monthlySales)}
        />
      </div>
      <SalesTable weeklySales={sales} />
    </>
  );
}

export default SalesTrend;
