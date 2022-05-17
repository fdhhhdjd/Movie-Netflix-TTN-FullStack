import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import { DataProvider } from "./Contexts/GlobalState";
import { DataAdminProvider } from "./ContextsAdmin/GlobalStateAdmin";
import "./index.css";
import store from "./Redux/Store";
import * as serviceWorker from "./serviceWorker";
ReactDOM.render(
  <Provider store={store}>
    <DataAdminProvider>
      <DataProvider>
        <Router>
          <App />
        </Router>
      </DataProvider>
    </DataAdminProvider>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
