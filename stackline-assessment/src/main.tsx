import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import App from "./App"
import "./css/index.css"
import { HashRouter, Routes, Route } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App/>}></Route>
        </Routes>
      </HashRouter>
    </Provider>
  </React.StrictMode>,
)
