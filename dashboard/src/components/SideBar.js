import React from 'react';
import image from '../assets/images/logo.png';

const SideBar = () => {
  const divStyle = {
    backgroundColor: 'rgb(148, 255, 142)'
  }
  return(
    <div>
       {/*<!-- Sidebar -->*/}
       <ul className="navbar-nav sidebar sidebar-light accordion" id="accordionSidebar" style={divStyle}>

      {/*<!-- Sidebar - Brand -->*/}
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
          <div className="sidebar-brand-icon">
              <img className="w-50" src={image} alt="DH-Clothes"/>
          </div>
      </a>
      

      {/*<!-- Divider -->*/}
      <hr className="sidebar-divider my-0"/>

      {/*<!-- Nav Item - Dashboard -->*/}

      {/*<!-- Divider -->*/}
      <hr className="sidebar-divider"/>

      {/*<!-- Heading -->*/}
      <div className="sidebar-heading">Dashboard | DH-Clothes</div>

      {/*<!-- Nav Item - Pages -->*/}
      <li className="nav-item">
          <a className="nav-link collapsed" href="/">
              <i className="fas fa-fw fa-battery-full"></i>
              <span>Page 1</span>
          </a>
      </li>

      {/*<!-- Nav Item - Charts -->*/}
      <li className="nav-item">
          <a className="nav-link" href="/">
              <i className="fas fa-fw fa-battery-full"></i>
              <span>Page 2</span></a>
      </li>

      {/*<!-- Nav Item - Tables -->*/}
      <li className="nav-item">
          <a className="nav-link" href="/">
              <i className="fas fa-fw fa-battery-full"></i>
              <span>Page 3</span></a>
      </li>

      {/*<!-- Divider -->*/}
      <hr className="sidebar-divider d-none d-md-block"/>
      </ul>
      {/*<!-- End of Sidebar -->*/}
    </div>
  )
}

export default SideBar;