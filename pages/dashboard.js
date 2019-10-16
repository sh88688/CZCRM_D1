import React, { Component } from "react";
import { MDBContainer, MDBRow } from "mdbreact";
import Card from '../components/card';
import CardContent from '../components/cardContent';
import Header from '../components/header';
import ConfigData from '../data/configData.json';
import LoadingContent from '../components/loadingContent';
import "../static/css/dashboard.css";
import intialData from '../data/intialData';
import testJson from './test.json';
class Dashboard extends Component {
  constructor(props)
  {
    super(props);
    this.state = intialData;  
  }

  updateDataState = (dataObject) => {
    ['totalTickets','totalMails','totalUsers','categoryTickets','priorityTickets','statusTickets'].forEach((type)=>{
      let copyData  =   {};
      copyData = {...this.state[type]};
      copyData.data = dataObject[type].data;
      this.setState({[type] : copyData});
    });
    this.setState({isGraphLoaded : true});
  }

  componentDidMount() {
    // this.authHandle();
    this.updateDataState(testJson);
  }

  authHandle = async () => {
    const url = new URL(`http://api.cz-tuts.com/dashboard`);
    const fetchCallOptions = {
      method: "post",
      credentials: 'include',
      headers: {
      'Content-Type': 'application/json'
      }
    };
      try {
          const resData = await fetch(url, fetchCallOptions);
          if (resData.status == 200) {
            const jsonData = await resData.json();
              if (jsonData.status == 1) {
              const data = jsonData.data;
              let dataObject = data;
              this.updateDataState(dataObject);
              } 
          } 
          else {
              if (resData.status == 401 || resData.status == 403) {
                window.location = "/auth";
              }
          }
      } 
      catch (error) {
        console.log(error);
      }
  }

  toggleCollapse = () =>{
    this.setState({isOpen : !this.state.isOpen});
  }
  render() {
    const progressModule = ['totalTickets','totalMails','totalUsers'];
    const chartModule = ['categoryTickets','statusTickets','priorityTickets'];
    const header =  <Header title="Dashboard" collapse={this.toggleCollapse} isOpen={this.state.isOpen} />;
    const progressCards = progressModule.map((module, index) => (
      <Card  key={index} config={ConfigData[module]} content={<CardContent key={index} config={ConfigData[`${module}Config`]} data={this.state[module].data} />} />
    ));
    const chartCards = chartModule.map((module, index) => {
      let CHART = this.state[module].chart;
      return (<Card key={index} config={ConfigData[module]} content={<CHART key={index} data={this.state[module].data} />} />)
    });

		 return(
			<MDBContainer fluid>
        <MDBRow className="mb-4">
					{header}
				</MDBRow>
        {this.state.isGraphLoaded && [progressCards, chartCards].map((item, index) => (
          <MDBRow key={index} >
            {item}
          </MDBRow>
        ))}
        {this.state.isGraphLoaded || <MDBRow className="justify-content-center"><LoadingContent /></MDBRow>}
			</MDBContainer>
		)
   }
}
export default Dashboard;
