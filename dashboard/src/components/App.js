import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom"
import Home from './Home'

function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
          <SideBar />
          <Router>
            <Switch>
              <Route path="/users">
                <ContentWrapper />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </div>
    </React.Fragment>
  );
}

export default App;
