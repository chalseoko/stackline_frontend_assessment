import logo from "./logo.svg"
// import { productCard } from "./features/product/ProductCard"
import "./App.css"

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
          <div>Chart</div>
          <div>Table</div>
        </div>
      </div>
    </div>
  )
}

export default App
