import React, { Component } from "react";
import { fetchCall } from '../functions/modularFunc';
//import Config from "../static/configs/urlConfig.json";
import { MDBContainer, MDBRow, MDBCol, MDBInput} from 'mdbreact';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import "../static/css/auth.css";
import AuthCard from '../components/authCard';

class  AuthPage extends Component  {
  constructor(props){
    super(props);
    this.state={email:"",name:"",mobile:"",password:"",repassword:""}
  }
  clickHandler = (event) => {
  event.preventDefault();
  const url = new URL(`http://api.cz-tuts.com/register`);
  const reqBody={
    email: this.state.email,
    name: this.state.name,
    mobile: this.state.mobile,
    password: this.state.password,
    repassword: this.state.repassword
  };
  const fetchCallOptions = {
        body: JSON.stringify(reqBody),
        method:'post',
        headers: {
        'Content-Type': 'application/json' 
      },
      // credentials:'include'
  };
  //API CALL:
  const result = fetchCall(url, fetchCallOptions, "text");   
  result.then(data => {
    let dataObj = JSON.parse(data);
    console.log(data)
    if(dataObj.status){
      // toaster.success("Successfully Logged In");
      alert(dataObj.message);
      window.location="/auth";
    }
    else{
      alert(dataObj.message);
    }
  });
  }
  inputHandler = (event) =>{
    this.setState({[event.target.name]:event.target.value});
  }

  render(){
    const Input = [
      {label:"Your Name",type:"text",name:"name"},
      {label:"Your Email",type:"email",name:"email"},
      {label:"Your Mobile",type:"text",name:"mobile"},
      {label:"Your Password",type:"password",name:"password"},
      {label:"Confirm Password",type:"password",name:"repassword"}
    ].map((fields, index) => (
      <MDBInput  key={index} label={fields.label} group type={fields.type} error="wrong" success="right" name ={fields.name} onChange={this.inputHandler} required />
    ));
    const footerConfig = {link: "/auth",title:"Already member?",linkText:"Sign In"};
    const btnConfig = {btnText: "Sign In", btnClick: this.clickHandler};
    const signUpCard = <AuthCard btn={btnConfig} inputs={Input} forgot="" footer={footerConfig} /> ;
    const worldMap = <div className="left-card-login"><img src="static/img/worldmap.png"></img></div>;
    return (
      <MDBContainer >
        <MDBRow center="true" >
          {[signUpCard,worldMap].map( (column, index) => (
          <MDBCol key={index} md="5">{column}</MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    );
}
};

export default AuthPage;