import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon} from "mdbreact";
import "../static/css/dashboard.css";
import PropTypes from "prop-types";

class NavBar extends React.Component {
  render(){
    const {isOpen, collapse, brand, dropItem} = this.props;
    return(
        <MDBNavbar color="special-color-dark" dark style={{ width: "100%" }} expand="lg">
        <MDBNavbarToggler onClick={collapse} />
        <MDBNavbarBrand>
        {brand}
        </MDBNavbarBrand>
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon far icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu right basic className="dropdown-default">
                {dropItem}
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}
NavBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  collapse: PropTypes.func.isRequired,
  brand: PropTypes.object.isRequired,
  dropItem: PropTypes.node.isRequired
}
export default NavBar;