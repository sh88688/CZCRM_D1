import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon} from "mdbreact";
import "../static/css/dashboard.css";
class Header extends React.Component {
  constructor(props)
  {
    super(props);
  }
  logoutHandle = async () => {
    const url = new URL(`http://api.cz-tuts.com/logout`);
    const fetchCallOptions = {
    method: "post",
    credentials: 'include',
    headers: {
    'Content-Type': 'application/json'
    }
    };
      try {
          const resData = await fetch(url, fetchCallOptions);
          if (resData.status == 200) {
              const jsonData = await resData.json();
              if (jsonData.status == 0) {
                window.location = "/auth";
              }
          } 
          else {
            if (resData.status == 401 || resData.status == 403) {
            // window.location = "/auth";
            }
          }
      } 
      catch (error) {
        console.log(error);
      }
    }
  render(){
    const {title, isOpen, collapse} = this.props;
    const dropItem = [{icon:"user-circle",text:"My Profile",handle:null},{icon:"home",text:"Dashboard",handle:null},{icon:"home",text:"Change Password",handle:null},{icon:"power-off",text:"Logout",handle:this.logoutHandle}]
    return(
        <MDBNavbar color="special-color-dark" dark style={{ width: "100%" }} expand="lg">
        <MDBNavbarToggler onClick={collapse} />
        <MDBNavbarBrand>
          <img src="https://www.c-zentrix.com/images/landing-page/preloader.gif" width="30" height="30" alt="C-zentrix" />
          <span className="ml-2"> {title}</span>
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

export default Header;