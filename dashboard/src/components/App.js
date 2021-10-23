import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom"
import Home from './Home'
import Products from './Products'

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
              <Route path="/products">
                <Products />
              </Route>
            </Switch>
          </Router>
        </div>
    </React.Fragment>
  );
}

export default App;
