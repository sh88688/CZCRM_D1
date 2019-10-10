import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon} from "mdbreact";
import "../Styles/dashboard.css";

class Header extends Component {
  constructor(props)
  {
	super(props);
	console.log(this.props);
  }
  render(){
	
    return(
        <MDBNavbar color="special-color-dark" dark style={{ width: "100%" }} expand="lg">
        <MDBNavbarToggler onClick={collapse} />
        <MDBNavbarBrand>
          <img src="https://www.c-zentrix.com/images/landing-page/preloader.gif" width="30" height="30" alt="C-zentrix" />
          <span className="ml-2"> {this.props.title}</span>
        </MDBNavbarBrand>
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon far icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu right basic className="dropdown-default">
                  <MDBDropdownItem href="profile"><MDBIcon className={`mr-2`} icon="user-circle" />My Profile</MDBDropdownItem>
                  <MDBDropdownItem href="dashboard"><MDBIcon className={`mr-2`} icon="home" />Dashboard</MDBDropdownItem>
                  <MDBDropdownItem href="#!"><MDBIcon className={`mr-2`} icon="key" />Change Password</MDBDropdownItem>
                  <MDBDropdownItem href="#!" onClick={() => alert()}><MDBIcon className={`mr-2`} icon="power-off" />Logout</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Header;