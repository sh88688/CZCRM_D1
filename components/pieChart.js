import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import PropTypes from "prop-types";
import "../static/css/dashboard.css";

const options = {
  legend: {
    display: false
  },
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  cutoutPercentage: 80,
  layout: { padding: 0 },
  tooltips: {
    enabled: true,
    mode: 'index',
    intersect: false,
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: '#fff',
    titleFontColor: '#263238',
    bodyFontColor: '#263238',
    footerFontColor: '#263238'
  }
};
const ChartBuilder = ({SUM, DATA}) => {
  return ( 
      <React.Fragment>
      <div>
      <Doughnut key={SUM} data={DATA} options={options} />
      </div>
      <div className="stats" style={{overflow: "auto"}}>
      {DATA.labels.map((label,index) => (
      <div
      className="device"
      key={label}>
      <h6>{DATA.labels[index]}</h6>
      <p className="h6" style={{color: `${DATA.datasets[0].backgroundColor[index]}`}}>
      {Math.floor(DATA.datasets[0].data[index]/SUM*100)}%
      </p>
      </div>
      ))}
      </div>
      </React.Fragment>
  
  )}
class PieChart extends Component {
  constructor(props){
    super(props);
  }
  
  render (){
    const {data} = this.props;
    const SUM = data.reduce((accum, {value})=> accum + value,0);
    const DATA= {
      labels: data.map(item => item.name),
      datasets: [
      {
        data: data.map(item => item.value),
        backgroundColor: ["#e53935", "#ffa000", "#303f9f"],
        hoverBackgroundColor: [
          "#f44336",
          "#ffb300",
          "#3f51b5"
        ]
      }
      ]
    };
    
    return (
      <ChartBuilder DATA={DATA} SUM={SUM} />
    );
  }
}
PieChart.propTypes = {
  data: PropTypes.array.isRequired,
}
export default PieChart;