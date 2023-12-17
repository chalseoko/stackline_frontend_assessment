import logo from "./img/logo.svg"
import "./css/App.css"
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const options = {
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

function App() {
  Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'sans-serif'
        }
    }
  });

  return (
    <div className="stackline-app">
      <div className="banner">
        <header>
          <img src={logo} className="logo" alt="Stackline company logo" />
        </header>
      </div>
      <div className="product-container">
        <div className="product-column">
          <div>Card</div>
        </div>
        
        <div className="sale-column">
              <HighchartsReact
                highcharts={Highcharts}
                options={options}/>
          {/* <div>Table</div> */}
        </div>
      </div>
    </div>
  )

  
}

export default App
