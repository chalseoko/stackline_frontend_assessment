import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { WeeklySales } from "../features/getProduct/productSlice";
import { Fragment } from "react";
import SalesTable from "./sales-table";

function SalesTrend(props: any) {
  const monthlySales = getMonthlySales(props.sales);
  setHighChartsOptions();

  return (
    <Fragment>
      <HighchartsReact
        highcharts={Highcharts}
        options={getTrendOptions(monthlySales)}
      />
      <SalesTable weeklySales={props.sales}/>
    </Fragment>
  );
}

function getMonthlySales(sales: any[]) {
  const retailSales = Array.apply(null, Array(12)).map(
    Number.prototype.valueOf,
    0
  );
  const wholesaleSales = Array.apply(null, Array(12)).map(
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

function getTrendOptions(data: any): Highcharts.Options {
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
        data: data.wholesale,
        color: "#9da7c0",
      },
      {
        name: "Retail Sales",
        type: "spline",
        data: data.retail,
        color: "#45a7f6",
      },
    ],
    xAxis: [
      {
        accessibility: {
          description: "Year",
        },
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
        lineColor: "transparent",
      },
    ],
    yAxis: [
      {
        labels: {
          enabled: false,
        },
        title: {
          text: null,
        },
        gridLineColor: "#ffffff",
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
