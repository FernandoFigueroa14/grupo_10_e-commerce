import React from 'react'
import SideBar from './SideBar'
import ContentWrapperUsersInDB from './ContentWrapperUsersInDB'
import ContentWrapperProductsInDB from './ContentWrapperProductsInDB'
import ContentWrapperHome from './ContentWrapperHome'
import ContentWrapperSearch from './ContentWrapperSearch'
import ContentWrapperFilter from './ContentWrapperFilter'
import ContentWrapperDetail from './ContentWrapperDetail'
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
              <Route path="/search">
                <ContentWrapperSearch />
              </Route>
              <Route path="/filter">
                <ContentWrapperFilter />
              </Route>
              <Route path="/detail">
                <ContentWrapperDetail />
              </Route>
              <Route path="/">
                <ContentWrapperHome />
              </Route>
            </Switch>
        </Router>
       
        </div>
    </React.Fragment>
  );
}

export default App;
