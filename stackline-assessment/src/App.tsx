import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import "./App.css";
import logo from './logo.svg';
import { trendOptions } from './constants';

function App() {
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
                options={trendOptions}/>
              {/* <HighchartsReact
                highcharts={Highcharts}
                options={salesOptions}/> */}
        </div>
      </div>
    </div>
  )

  
}

export default App
