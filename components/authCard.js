import React, { Component } from 'react';
import PropTypes from "prop-types";
import {MDBCard, MDBCardBody, MDBBtn} from "mdbreact";
import SocialBtn from './socialBtn';
import AuthFooter from './authFooter';
import "../static/css/dashboard.css";

class AuthCard extends Component{
    render(){
    const { inputs, btn, footer, forgot } = this.props;

        return(
            <MDBCard className="mt-5">
            <MDBCardBody className="mx-4">
            <div className="text-center">
            <img src="static/img/CZentrixLogo.png" height="50" width="150"></img>
            </div>
            {inputs}
            {forgot}
            <div className="text-center mb-3">
            <MDBBtn type="button" gradient="blue" rounded className="btn-block z-depth-1a" onClick ={btn.btnClick}>
            {btn.btnText}
            </MDBBtn>
            </div>
            <SocialBtn />
            </MDBCardBody>
            <AuthFooter link={footer.link} title={footer.title} linkText={footer.linkText} />
            </MDBCard>
        )
    }
}
AuthCard.propTypes = {
    inputs: PropTypes.array.isRequired,
    btn: PropTypes.object.isRequired,
    footer: PropTypes.object.isRequired,
    forgot: PropTypes.node,
}
export default AuthCard;