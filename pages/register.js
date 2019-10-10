import React, { Component } from "react";
import fetch from 'isomorphic-unfetch';
//import Config from "../static/configs/urlConfig.json";
import { MDBContainer,MDBAlert, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
class  AuthPage extends Component  {
  
  constructor(props){
    super(props);
    this.clickHandler=this.clickHandler.bind(this);
    this.inputHandler=this.inputHandler.bind(this);
    this.fetchCaller=this.fetchCaller.bind(this);
    this.state={email:"",name:"",mobile:"",password:"",repassword:""}
  }

   async  fetchCaller(url,options){
    try{
     
      let response=await fetch(url,options);
    
      let data=await response.text();
      return data;
    }
    catch(err){
      console.log(err);
    }
    
   } 
   clickHandler(event){
    event.preventDefault();
   const URL="http://api.cz-tuts.com/register";
   var reqBody={
    email: this.state.email,
    name: this.state.name,
    mobile: this.state.mobile,
    password: this.state.password,
    repassword: this.state.repassword
  };
  this.fetchCaller(URL,{
    body: JSON.stringify(reqBody),
    method:'post',
    headers: {
   'Content-Type': 'application/json' 
 },
// credentials:'include'
}).then(function(data){
  var dataObj=JSON.parse(data);
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
   inputHandler(event){
    
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
                label="Your name"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                name ="name"
                onChange={this.inputHandler}
              />
              <MDBInput
                label="Your email"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                name ="email"
                onChange={this.inputHandler}
              />
              <MDBInput
                label="Your mobile"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                name ="mobile"
                onChange={this.inputHandler}
              />
              <MDBInput
                label="Your password"
                group
                type="password"
                name="password"
                validate
                containerClass="mb-0"
                onChange={this.inputHandler}
              />
              <MDBInput
                label="Confirm password"
                group
                type="password"
                name="repassword"
                validate
                containerClass="mb-0"
                onChange={this.inputHandler}
              />
              <div className="text-center mb-3">
                <MDBBtn
                  type="button"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                onClick ={this.clickHandler}>
                  Sign Up
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
                Already member?
                <a href="/auth" className="blue-text ml-1">

                  Sign In
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