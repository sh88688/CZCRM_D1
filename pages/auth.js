import React, { Component } from "react";
import { fetchCall } from '../functions/modularFunc';
//import Config from "../static/configs/urlConfig.json";
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import "../static/css/auth.css";
import AuthLayout from '../components/authLayout';
import signInData from '../data/signInInput';

const Forgot = () =>(
  <p className="font-small blue-text d-flex justify-content-end pb-3">
    Forgot
    <a href="#!" className="blue-text ml-1">
    Password?
    </a>
  </p>
);

class  AuthPage extends Component  {
    constructor(props){
      super(props);
      this.state={email:"",password:""}
    }
    clickHandler = (event) => {
      event.preventDefault(); 
      // window.location="/dashboard";
      const url = new URL(`http://api.cz-tuts.com/login`);
      const reqBody={
        email: this.state.email,
        password: this.state.password
      };
      const fetchCallOptions = {
            body: JSON.stringify(reqBody),
            method:'post',
            headers: {
            'Content-Type': 'application/json' 
          },
          credentials:'include'
      };
      //API CALL:
      const result = fetchCall(url, fetchCallOptions, "json");   
      result.then(data => {
          if(data.status){
              // toaster.success("Successfully Logged In");
              document.cookie='nodeSessID='+data.nodeSessID+";maxAge=3600000;path='/';domain='cz-tuts.com'";
              window.location="/dashboard";
          }
          else{
            alert(data.message);
          }
      });
    }
    inputHandler = (event) =>{
      this.setState({[event.target.name]:event.target.value});
    }
    render(){
      const footerConfig = {link: "/register",title:"Not a member?",linkText:"Sign Up"};
      const btnConfig = {btnText: "Sign In", btnClick: this.clickHandler};
      return (
        <AuthLayout btnConfig={btnConfig} inputHandler={this.inputHandler} inputData={signInData} forgotComp={<Forgot />} footerConfig={footerConfig} />
      );
    }
};

export default AuthPage;