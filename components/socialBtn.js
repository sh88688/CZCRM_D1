import React, { Component, Fragment } from 'react';
import {MDBBtn, MDBIcon} from "mdbreact";
import "../static/css/dashboard.css";

class SocialBtn extends Component{
    render(){
    const btns = [
        {icon: "facebook-f"},
        {icon: "twitter"},
        {icon: "google-plus-g"}
    ];
        return(
            <Fragment>
              <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
                or Sign in with:
              </p>
              <div className="row my-3 d-flex justify-content-center">
                  {btns.map((btn, index) => (
                    <MDBBtn
                    key={index}
                    type="button"
                    color="white"
                    rounded
                    className="mr-md-3 z-depth-1a"
                    >
                    <MDBIcon key={index} fab icon={btn.icon} className="blue-text" />
                    </MDBBtn>
                  ))}
              </div>
              </Fragment>
        );
    }
}

export default SocialBtn;