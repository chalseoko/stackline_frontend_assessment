import "./css/App.css"
import Product from "./components/product"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import Banner from "./components/banner"
import { fetchData } from "./features/fetchProduct/fetchProduct"

function App() {
  const dispatch = useAppDispatch()
  const data = useAppSelector((state) => state.data)
  const error = useAppSelector((state) => state.error)

  useEffect(() => {
    dispatch(fetchData())
  }, [])

  console.log(error, data)

  return (
    <div className="stackline-app">
      <Banner />
      <div className="product-container">
        {!error && data.length !== 0 && <Product data={data} />}
      </div>
    </div>
  )
}

export default App
