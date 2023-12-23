import Highcharts from "highcharts/highstock"
import HighchartsReact from "highcharts-react-official"
import { xTickLabels } from "../data/constants"

function SalesTrend(props: any) {
  const sales = getMonthlySales(props.sales)
  setHighChartsOptions()

  return (
    <HighchartsReact highcharts={Highcharts} options={getTrendOptions(sales)} />
  )
}

function getMonthlySales(sales) {
  let retailSales = Array.apply(null, Array(12)).map(
    Number.prototype.valueOf,
    0,
  )
  let wholesaleSales = Array.apply(null, Array(12)).map(
    Number.prototype.valueOf,
    0,
  )

  sales.forEach((salesWeek) => {
    var month: number = salesWeek["weekEnding"].split("-")[1]
    retailSales[month - 1] += salesWeek["retailSales"]
    wholesaleSales[month - 1] += salesWeek["wholesaleSales"]
  })

  return { retail: retailSales, wholesale: wholesaleSales }
}

function getTrendOptions(sales: any): {} {
  return {
    chart: {
      type: "spline",
      style: {
        fontFamily: ["Trebuchet MS", "sans-serif"],
      },
    },
    credits: {
      enabled: false,
    },
    title: {
      text: "Retail Sales",
      align: "low",
      style: {
        fontWeight: "lighter",
      },
    },
    legend: {
      enabled: false,
    },
    series: [
      { name: "Wholesale Sales", data: sales.wholesale, color: "#9da7c0" },
      { name: "Retail Sales", data: sales.retail, color: "#45a7f6" },
    ],
    xAxis: [
      {
        categories: xTickLabels,
        acessibility: "Months of the year",
        title: {
          enabled: false,
        },
        lineColor: {
          opacity: 0.25,
        },
        labels: {
          style: {
            opacity: 0.5,
          },
        },
      },
    ],
    yAxis: [
      {
        title: "",
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
  }
}

function setHighChartsOptions() {
  Highcharts.setOptions({
    lang: {
      thousandsSep: ",",
    },
  })
}

export default SalesTrend
