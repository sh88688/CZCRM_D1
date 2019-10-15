import React, { Component, Fragment } from 'react';
import {MDBModalFooter} from "mdbreact";

import "../static/css/dashboard.css";

class AuthFooter extends Component{
    render(){
    const {title, linkText, link} = this.props;
        return(
            <MDBModalFooter className="mx-5 pt-3 mb-1">
              <p className="font-small grey-text d-flex justify-content-end">
                {title}
                <a href={link} className="blue-text ml-1">
                  {linkText}
                </a>
              </p>
            </MDBModalFooter>
        );
    }
}

export default AuthFooter;