import fetchCall from '../components/fetchCaller';
import React, { Component } from "react";
import { MDBContainer, MDBRow } from "mdbreact";
import VerticalBarChart from '../components/verticalBarChart';
import Card from '../components/card';
import CardContent from '../components/cardContent';
import Header from '../components/header';
import ConfigData from '../Data/ConfigData.json';
import PieChart from '../components/pieChart';
// import { configGraph, configCard, configPrmArray }	from "../static/DashboardConfig.js"	;
import LoadingContent from '../components/loadingContent';
import "../Styles/dashboard.css";

class Dashboard extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      isOpen: false,
      isGraphLoaded: true,
      totalTickets: {
        data: {
          primary: {
            title: "Tickets Created",
            value: 435,
            progress_title: "Closed",
            progress_value: 5
          },
          secondary: {
            title: "Tickets Escalated",
            value: 49,
            progress_title: "Escalation Rate",
            progress_value: 74
          }
        }
      },
      totalMails: {
        data: {
          primary: {
            title: "Mails Received",
            value: 1543,
            progress_title: "Mails Replied",
            progress_value: 9
          },
          secondary: {
            title: "Fresh Mails Received",
            value: 36,
            progress_title: "Fresh Mails Replied",
            progress_value: 46
          }
        }
      },
      totalUsers: {
        data: {
          primary: {
            title: "Users",
            value: 738,
            progress_title: "Active Users",
            progress_value: 10
          },
          secondary: {
            title: "Loggedin Users",
            value: 256,
            progress_title: "Locked Ticket Users",
            progress_value: 12
          }
        }
      },
      categoryTickets: {
        chart: PieChart,
        data: []
      },
      priorityTickets: {
        chart: PieChart,
        data: []
      },
      statusTickets: {
        chart: VerticalBarChart,
        data: []
      }
}
    this.updateHandle=this.updateHandle.bind(this);
   
  }

  updateDataState = (dataObject,TYPE) => {
    let copyData  =   {};
    copyData = {...this.state[TYPE]};
    copyData.data = dataObject[TYPE].data;
    this.setState({[TYPE] : copyData});

  }

  componentDidMount() {
    // this.authHandle();
    this.updateHandle();
  }

  updateHandle = () => {
    const postData          =       {};
    postData.clientId       =       "1";
    const   postJson        =       JSON.stringify(postData);
    const queryParam = `?postData=${postJson}`;
    const url = new URL(`http://172.16.3.46/CZCRM/api/dashboard_request.php${queryParam}`);
    const fetchCallOptions = {
       method: "GET",
     };
    try {
      const result = fetchCall(url, fetchCallOptions, "json");
      result.then(data => {
        if(data.status == 'error'){
          // error message here
        }
        else{
          let dataObject  = data;
          console.log('data ==> ',dataObject);
          this.updateDataState(dataObject,"categoryTickets");
          this.updateDataState(dataObject,"priorityTickets");
          this.updateDataState(dataObject,"statusTickets");
        }
      });
    }
    catch (error) {
        console.log(error);
    }

  }

  authHandle = () =>{
    const url = new URL(`http://api.cz-tuts.com/dashboard`);
    const fetchCallOptions ={
          method:"post",
          credentials:'include', 
          headers: {
           'Content-Type': 'application/json' 
          }
      };
    try {
      const result = fetchCall(url, fetchCallOptions, "json");
      console.log(result);
      result.then(data => {
        if(data.status==1){
          this.updateHandle();
        }
        else{
          // error message here
        }
      });
    }
    catch (error) {
        console.log(error);
    }
  }
  // async  updateHandle() {
	//  const	postData	=	{};
	// 	postData.clientId	=	"1";
  //   const 	postJson	=	JSON.stringify(postData);
  //   try {
  //   const resData= await	fetch(`http://api.cz-tuts.com/dashboard`,
  //   {
  //     method:"post",
  //     credentials:'include', 
  //     headers: {
  //      'Content-Type': 'application/json' 
  //     }
  // })
  // if(resData.status==200){
  //   const jsonData=await resData.json();
  
  //   if(jsonData.status==1){
  //     const data=jsonData.data;
  //     // console.log(jsonData);
  //     let dataObject	= data;
  //     this.setState({isGraphLoaded:true});
  //     this.updateDataState(dataObject.tickets,"totalTickets",configPrmArray.tickets);
  //     this.updateDataState(dataObject.mails,"totalMails",configPrmArray.mails);
  //     this.updateDataState(dataObject.users,"totalUsers",configPrmArray.users);								
  //     this.setState({priorityPie:dataObject.priorityTickets});
  //     this.setState({categoryPie:dataObject.categoryTickets});
  //     this.setState({statusBar:dataObject.statusTickets});
  //   }  
  //   else{
      
  //   }
  // }
  // else{
  //   console.log(resData.status);
  //     if(resData.status==401 || resData.status==403){
       
  //       window.location="/auth";
  //     }
  // }
    
  //   }
	// 	catch(err){
  //       console.log(err);
  //   }
			
		
  // }

  toggleCollapse = () =>{
    this.setState({isOpen : !this.state.isOpen});
  }
  render() {
    const progressModule = ['totalTickets','totalMails','totalUsers'];
    const chartModule = ['categoryTickets','statusTickets','priorityTickets'];

	 if(this.state.isGraphLoaded==false){
		 return(
			<MDBContainer fluid>
				<MDBRow >
					<Header title="Dashbaord" isOpen={this.state.isOpen} collapse={() => this.toggleCollapse}/>
				</MDBRow>
				<MDBRow className="justify-content-center">
					<LoadingContent />
				</MDBRow>
			</MDBContainer>
		)
	 }
	 else{
		return (
      <MDBContainer fluid>
      <MDBRow >
         <Header title="Dashboard" collapse={this.toggleCollapse} isOpen={this.state.isOpen} />
       </MDBRow>
      <MDBRow className="mt-4">
          {progressModule.map((module, index) => (
            <Card key={index} config={ConfigData[module]}
             content={<CardContent key={index} data={this.state[module].data}/>}
            />
          ))}
      </MDBRow>
      <MDBRow>
        {chartModule.map((module, index) => {
          let CHART = this.state[module].chart;
          return  (
            <Card key={index} config={ConfigData[module]}
            content={<CHART key={index} data={this.state[module].data} />}
            />
          )})}
      </MDBRow>
    </MDBContainer>
		);
	}
  }
}
export default Dashboard;
