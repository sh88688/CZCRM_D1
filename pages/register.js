import React, { Component } from "react";
import { fetchCall } from '../functions/modularFunc';
//import Config from "../static/configs/urlConfig.json";
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import "../static/css/auth.css";
import AuthLayout from '../components/authLayout';
import signUpData from '../data/signUpInput';

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
    const footerConfig = {link: "/auth",title:"Already member?",linkText:"Sign In"};
    const btnConfig = {btnText: "Sign In", btnClick: this.clickHandler};

    return (
      <AuthLayout btnConfig={btnConfig} inputHandler={this.inputHandler} inputData={signUpData} forgotComp="" footerConfig={footerConfig} />
    );
  }
};

export default AuthPage;