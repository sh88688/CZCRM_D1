import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput} from 'mdbreact';
import PropTypes from "prop-types";
import AuthCard from '../components/authCard';

class  AuthLayout extends Component  {
  render(){
    const {inputData, inputHandler, footerConfig, btnConfig, forgotComp} = this.props;
    const Input = inputData.map((fields, index) => (
      <MDBInput  key={index} label={fields.label} group type={fields.type} error="wrong" success="right" name ={fields.name} onChange={inputHandler} required />
    ));
    const Card = <AuthCard btn={btnConfig} inputs={Input} forgot={forgotComp} footer={footerConfig} /> ;
    const worldMap = <div className="left-card-login"><img src="static/img/worldmap.png"></img></div>;
  return (
    <MDBContainer >
      <MDBRow center="true" >
        {[Card,worldMap].map( (column, index) => (
            <MDBCol key={index} md="5">{column}</MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}
};
AuthLayout.propTypes = {
  inputData: PropTypes.array.isRequired,
  inputHandler: PropTypes.func.isRequired,
  footerConfig: PropTypes.object.isRequired,
  btnConfig: PropTypes.object.isRequired,
  forgotComp: PropTypes.object,
}
export default AuthLayout;