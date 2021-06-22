import React, { Component } from 'react';
import { createBrowserHistory } from "history";
import { Router, Route } from "react-router-dom";

import Main from "./views/Main";

export const history = createBrowserHistory();

class App extends Component {

  render() {

    return (
      <div>
        <Router history={history}>
          <Route exact path="/" component={Main} />
        </Router>
      </div>
    );
  }
}


export default App;