import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import "./App.css";

import Library from "./components/library/Library";
import CreateBook from "./components/books/CreateBook";
import SelectBook from "./components/books/SelectBook";
import { NavBar } from "./components/library/NavBar";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" render={props => <Library />} />
          <Route
            exact
            path="/createOrUpdate"
            render={props => <CreateBook />}
          />
          <Route exact path="/select" render={props => <SelectBook />} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
