import React from 'react';
import TopBar from './TopBar';
import Home from './Home';
import Footer from './Footer';

function ContentWrapperHome() {
    return (
      <React.Fragment>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <TopBar />
              <div className="container-fluid">
                <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800"> Home D-HC | Clothes</h1>
                </div>
                <div className="row">
                    <Home/>
                </div>
              </div>
            <Footer />
          </div>
        </div>    
      </React.Fragment>
    )
}
export default ContentWrapperHome