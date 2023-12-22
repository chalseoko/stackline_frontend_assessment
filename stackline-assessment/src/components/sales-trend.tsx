import Highcharts from 'highcharts/highstock';
import HighchartsReact from "highcharts-react-official"
import { xTickLabels } from '../data/constants';

const SalesTrend = (props: any) => {
    const sales = getMonthlySales();
    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={getTrendOptions()} />
    );
}

function getMonthlySales() {
    return (
    [
        { "name": "1", data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
        { "name": "2", data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }
    ]);
}

function getTrendOptions(): {} {
    return {
        chart: {
            type: 'spline',
            style: {
                fontFamily: ["Trebuchet MS", "sans-serif"]
            }

        },
        credits: {
            enabled: false
        },
        title: {
            text: 'Retail Sales',
            align: 'low',
            style: {
                fontWeight: 'lighter',
            }
        },
        legend: {
            enabled: false
        },
        series: [
            { name: "Retail", data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], color: "#9da7c0" },
            { name: "Wholesale", data: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], color: "#45a7f6" },
        ]
        ,
        xAxis: [
            {
                categories: xTickLabels,
                acessibility: 'Months of the year',
                title: {
                    enabled: false
                },
                lineColor: {
                    opacity: 0.25
                },
                labels: {
                    style: {
                        opacity: 0.5
                    }
                }
            }
        ],
        yAxis: [
            {
                title: "",
                labels: {
                    enabled: false
                }
            }
        ],
        plotOptions: {
            series: {
                marker: {
                    enabled: false
                }
            }
        }
    }
};

export default SalesTrend;