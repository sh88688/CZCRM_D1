import VerticalBarChart from '../components/VerticalBarChart';
import CustomPieChart from '../components/CustomPieChart';
const	configGraph={
	priorityTickets:{
		"titleName":"Priority Wise Tickets",
		"chartType":CustomPieChart,
		"dataVar":"priorityPie"
	},
	statusTickets:{
		"titleName":"Status Wise Tickets",
		"chartType":VerticalBarChart,
		"dataVar":"statusBar"
	},
	categoryTickets:{
		"titleName":"Category Wise Tickets",
		"chartType":CustomPieChart,
		"dataVar":"categoryPie"

	}
}

const	configCard={
	ticketCard:{
		"dataVar":"totalTickets"
	},
	mailCard:{
		"dataVar":"totalMails",
	},
	userCard:{
		"dataVar":"totalUsers",
	}
}

const 	configPrmArray = {
	tickets: {
		ticketCreated:{
			"type":"primary",
			"key":"value"
		},
		ticketClosedRate:{
			"type":"primary",
			"key":"progressValue"
		},
		ticketEscalated:{
			"type":"secondary",
			"key":"value"
		},
		escalationRate:{
			"type":"secondary",
			"key":"progressValue"
		}
	},
	mails : {
		mailReceived:{
		"type":"primary",
		"key":"value"
		},
		mailReplied:{
			"type":"primary",
			"key":"progressValue"
		},
		freshMailReceived:{
			"type":"secondary",
			"key":"value"
		},
		freshMailReplied:{
			"type":"secondary",
			"key":"progressValue"
		}
	},
	users : {
		totalUsers:{
			"type":"primary",
			"key":"value"
		},
		activeUsers:{
			"type":"primary",
			"key":"progressValue"
		},
		loggedInUsers:{
			"type":"secondary",
			"key":"value"
		}
	}
}
export {configGraph,configCard,configPrmArray};
