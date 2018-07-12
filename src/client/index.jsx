// Client side
import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

//
import Routes from "./Routes";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

// Redux
const store = createStore(reducers, {}, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>{renderRoutes(Routes)}</div>
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.hydrate(<App />, document.querySelector("#app"));
