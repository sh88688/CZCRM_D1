import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol} from 'mdbreact';
import AuthCard from '../components/authCard';

class  AuthLayout extends Component  {
  render(){
    const {inputData, footerConfig, btnConfig, forgotComp} = this.props;
    const Card = <AuthCard btn={btnConfig} inputs={inputData} forgot={forgotComp} footer={footerConfig} /> ;
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

export default AuthLayout;