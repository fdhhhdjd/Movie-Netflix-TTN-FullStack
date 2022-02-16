import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./Redux/Store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
// import { DataProvider } from "./Contexts/GlobalState";
import {DataAdminProvider} from './ContextsAdmin/GlobalStateAdmin'
import "react-toastify/dist/ReactToastify.css";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <DataAdminProvider> 
      {/* <DataProvider> */}
        <Router>
          <App />
        </Router>
      {/* </DataProvider> */}
    </DataAdminProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
