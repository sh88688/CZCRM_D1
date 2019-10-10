import React, { Component } from "react";
import { fetchCall } from '../functions/modularFunc';
//import Config from "../static/configs/urlConfig.json";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

class  AuthPage extends Component  {
  
  constructor(props){
    super(props);
    this.state={email:"",password:""}
  }
  clickHandler = (event) => {
    event.preventDefault();
    window.location="/dashboard";  
    /*
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
    result.then(function(data){
        // console.log(data);
     if(data.status){
        // toaster.success("Successfully Logged In");
        document.cookie='nodeSessID='+data.nodeSessID+";maxAge=3600000;path='/';domain='cz-tuts.com'";
        window.location="/dashboard";
     }
     else{
      alert(data.message);
     }});
     */
  }
   inputHandler = (event) =>{
    this.setState({[event.target.name]:event.target.value});
  }
  render(){
  return (
    <MDBContainer >
      <MDBRow center="true" >
        <MDBCol md="5">
          <MDBCard >
            <style>{`
            .card{margin-top:20%}
            `}</style>
            <MDBCardBody className="mx-4">
              <div className="text-center">
               <img src="static/img/CZentrixLogo.png" height="50" width="150"></img>
              </div>
              <MDBInput
                label="Your email"
                group
                type="email"
                error="wrong"
                success="right"
                name ="email"
                onChange={this.inputHandler}
                required
              />
              <MDBInput
                label="Your password"
                group
                type="password"
                name="password"
                validate
                containerClass="mb-0"
                onChange={this.inputHandler}
                required
              />
              <p className="font-small blue-text d-flex justify-content-end pb-3">
                Forgot
                <a href="#!" className="blue-text ml-1">

                  Password?
                </a>
              </p>
              <div className="text-center mb-3">
                <MDBBtn
                  type="button"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                onClick ={this.clickHandler}>
                  Sign in
                </MDBBtn>
              </div>
              <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">

                or Sign in with:
              </p>
              <div className="row my-3 d-flex justify-content-center">
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                  <MDBIcon fab icon="facebook-f" className="blue-text text-center" />
                </MDBBtn>
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                  <MDBIcon fab icon="twitter" className="blue-text" />
                </MDBBtn>
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="z-depth-1a"
                >
                  <MDBIcon fab icon="google-plus-g" className="blue-text" />
                </MDBBtn>
              </div>
            </MDBCardBody>
            <MDBModalFooter className="mx-5 pt-3 mb-1">
              <p className="font-small grey-text d-flex justify-content-end">
                Not a member?
                <a href="/register" className="blue-text ml-1">

                  Sign Up
                </a>
              </p>
            </MDBModalFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol md="5">
        

            <div className="left-card-login">
             <img src="static/img/worldmap.png"></img>
            </div>
         
        </MDBCol>
      </MDBRow>
     
      <style global jsx>{`
      
      .left-card-login{
        margin-top:40%
      }
        .form-elegant .font-small {
            font-size: 0.8rem; }
          
          .form-elegant .z-depth-1a {
            -webkit-box-shadow: 0 2px 5px 0 rgba(55, 161, 255, 0.26), 0 4px 12px 0 rgba(121, 155, 254, 0.25);
            box-shadow: 0 2px 5px 0 rgba(55, 161, 255, 0.26), 0 4px 12px 0 rgba(121, 155, 254, 0.25); }
          
          .form-elegant .z-depth-1-half,
          .form-elegant .btn:hover {
            -webkit-box-shadow: 0 5px 11px 0 rgba(85, 182, 255, 0.28), 0 4px 15px 0 rgba(36, 133, 255, 0.15);
            box-shadow: 0 5px 11px 0 rgba(85, 182, 255, 0.28), 0 4px 15px 0 rgba(36, 133, 255, 0.15); }
      `}</style>
    </MDBContainer>
  );
}
};

export default AuthPage;