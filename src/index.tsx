import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
// import "./index.css"
import "bootstrap/dist/css/bootstrap.css"
import { Provider } from "react-redux"
import { dataStore } from "./data/dataStore"
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={dataStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
