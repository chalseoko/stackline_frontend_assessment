import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { WeeklySales } from "../features/product/productSlice";

function SalesTrend(props: any) {
  const sales = getMonthlySales(props.sales);
  setHighChartsOptions();

  return (
    <HighchartsReact highcharts={Highcharts} options={getTrendOptions(sales)} />
  );
}

function getMonthlySales(sales: []) {
  let retailSales = Array.apply(null, Array(12)).map(
    Number.prototype.valueOf,
    0
  );
  let wholesaleSales = Array.apply(null, Array(12)).map(
    Number.prototype.valueOf,
    0
  );

  sales.forEach((salesWeek: WeeklySales) => {
    var month: string = salesWeek["weekEnding"].split("-")[1];
    retailSales[+month - 1] += salesWeek["retailSales"];
    wholesaleSales[+month - 1] += salesWeek["wholesaleSales"];
  });

  return { retail: retailSales, wholesale: wholesaleSales };
}

function getTrendOptions(sales: any): Highcharts.Options {
  return {
    chart: {
      type: "spline",
      style: {
        fontFamily: "Trebuchet MS, sans-serif",
      },
    },
    credits: {
      enabled: false,
    },
    title: {
      text: "Retail Sales",
      align: "left",
      style: {
        fontWeight: "lighter",
      },
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        name: "Wholesale Sales",
        type: "spline",
        data: sales.wholesale,
        color: "#9da7c0",
      },
      {
        name: "Retail Sales",
        type: "spline",
        data: sales.retail,
        color: "#45a7f6",
      },
    ],
    xAxis: [
      {
        categories: [
          "JAN",
          "FEB",
          "MAR",
          "APR",
          "MAY",
          "JUN",
          "JUL",
          "AUG",
          "SEP",
          "OCT",
          "NOV",
          "DEC",
        ],
        labels: {
          style: {
            opacity: 0.5,
          },
        },
      },
    ],
    yAxis: [
      {
        labels: {
          enabled: false,
        },
      },
    ],
    tooltip: {
      valuePrefix: "$",
      shared: true,
    },
    plotOptions: {
      series: {
        marker: {
          enabled: false,
        },
      },
    },
  };
}

function setHighChartsOptions() {
  Highcharts.setOptions({
    lang: {
      thousandsSep: ",",
    },
  });
}

export default SalesTrend;
