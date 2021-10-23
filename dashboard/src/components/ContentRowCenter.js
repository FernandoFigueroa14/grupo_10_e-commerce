import React from 'react';
import UsersInDB from './UsersInDb';
import {
    BrowserRouter as Router,
    Switch, Route, Link
  } from "react-router-dom"

function ContentRowCenter(){
    return (
        <div className="row">
            <UsersInDB />
        </div>
    )
}

export default ContentRowCenter;