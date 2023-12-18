
  export const trendOptions = {
    chart: {
      type: 'spline'
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
    series: [ {
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    }],
    xAxis: [
      {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        acessibility: 'Months of the year',
        title: {
          enabled: false
        }
      }
    ], 
    yAxis: [
      {
        title : "",
        labels: {
          enabled:false
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
    },
    credits: {
      enabled: false
    }
  };
