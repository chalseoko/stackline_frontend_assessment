import Highcharts from 'highcharts/highstock';
import HighchartsReact from "highcharts-react-official"
import { xTickLabels } from '../data/constants';

const SalesTrend = (props: any) => {
    const sales = getMonthlySales();
    if (sales) {
        return (
            <HighchartsReact
                highcharts={Highcharts}
                options={getTrendOptions.bind(sales)} />
        );
    } else {
        return <div>Sales trend chart loading...</div>
    }
}

function getMonthlySales(): number[] {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
}

function getTrendOptions(sales: number[]) {
    return {
        chart: {
            type: 'spline',

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
        series: [{
            data: sales
        }],
        xAxis: [
            {
                categories: xTickLabels,
                acessibility: 'Months of the year',
                title: {
                    enabled: false
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
                point: {
                    events: {
                    }
                }
            }
        }
    }
};

export default SalesTrend;