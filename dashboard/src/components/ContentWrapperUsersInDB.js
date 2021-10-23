import React from 'react';
import TopBar from './TopBar';
import UsersInDB from './UsersInDB';
import Footer from './Footer';

function ContentWrapperUsersInDB() {
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
                            <UsersInDB/>
                        </div>
				    </div>
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapperUsersInDB