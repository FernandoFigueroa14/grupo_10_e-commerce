import React from 'react';
import image from '../assets/images/logo.png';
import { Link } from "react-router-dom"

function SideBar(){
    const textStyle = {
        color: 'black'
      }

    return (
        <React.Fragment>
            <ul className="navbar-nav sidebar sidebar-light accordion" id="accordionSidebar" style={{backgroundColor: 'rgb(148, 255, 142)'}}>
            {/*<!-- Sidebar - Brand -->*/}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
                <div className="sidebar-brand-icon">
                <Link to='/'><img className="w-50" src={image} alt="DH-Clothes" style={{padding: '10px'}}/></Link>
                </div>
            </a>

            {/*<!-- Divider -->*/}
            <hr className="sidebar-divider"/>

            {/*<!-- Heading -->*/}
            <div className="sidebar-heading" style={textStyle}>Dashboard | DH-Clothes</div>

            {/*<!-- Nav Item - Pages -->*/}
            <li className="nav-item">
                <a className="nav-link collapsed" href="#">
                    <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
                    <Link to='/users'><span style={textStyle}>Usuarios en base de datos</span></Link>
                </a>
            </li>

            {/*<!-- Nav Item - Charts -->*/}
            <li className="nav-item">
                <a className="nav-link" href="#">
                    <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
                    <Link to='/products'><span style={textStyle}>Productos en base de datos</span></Link>
                </a>
            </li>

            {/*<!-- Nav Item - Tables -->*/}
            <li className="nav-item">
                <a className="nav-link" href="/">
                <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
                    <span style={textStyle}>Page 3</span></a>
            </li>

            {/*<!-- Divider -->*/}
            <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
        </React.Fragment>
    )
}
export default SideBar;