import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon} from "mdbreact";
import "../static/css/dashboard.css";
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
                {dropItem.map(item =>{
                    <MDBDropdownItem href="#" onClick={item.handle}>
                    <MDBIcon className={`mr-2`} icon={item.icon} />
                    {item.text}
                    </MDBDropdownItem>
                })}
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavBar;