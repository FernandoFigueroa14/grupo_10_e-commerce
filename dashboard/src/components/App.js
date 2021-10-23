import React from 'react';
import SideBar from './SideBar';
import ContentWrapperUsersInDB from './ContentWrapperUsersInDB';
import ContentWrapperProductsInDB from './ContentWrapperProductsInDB';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
      <div id="wrapper">
        <Router>
          <SideBar />
            <Switch>
              <Route path="/users">
                <ContentWrapperUsersInDB />
              </Route>
              <Route path="/products">
                <ContentWrapperProductsInDB />
              </Route>
              <Route path="/">

              </Route>
            </Switch>
        </Router>
       
        </div>
    </React.Fragment>
  );
}

export default App;
