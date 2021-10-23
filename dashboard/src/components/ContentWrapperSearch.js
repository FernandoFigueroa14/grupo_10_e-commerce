import React from 'react';
import TopBar from './TopBar';
import Search from './Search';
import Footer from './Footer';

function ContentWrapperSearch() {
    return (
      <React.Fragment>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <TopBar />
              <div className="container-fluid">
                <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">D-HC | Clothes</h1>
                </div>
                <div className="row">
                    <Search/>
                </div>
              </div>
            <Footer />
          </div>
        </div>    
      </React.Fragment>
    )
}
export default ContentWrapperSearch