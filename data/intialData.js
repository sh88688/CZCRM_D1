import PieChart from '../components/pieChart';
import VerticalBarChart from '../components/verticalBarChart';

 const intialData = {
    isOpen: false,
    isGraphLoaded: false,
    totalTickets: {
      data: {}
    },
    totalMails: {
      data: {}
    },
    totalUsers: {
      data: {}
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

  export default intialData;