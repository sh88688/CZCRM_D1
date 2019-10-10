import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell} from 'recharts';

// const VerticalBarchart = React.createClass({ See why error in this
class VerticalBarChart extends React.Component{


    render () {
    const colors = ["#0712B3", "#006600", "#7C8AEE", "#cc0066", "#993300"];
  	return (
      <BarChart 
      layout="vertical" 
      width={400} 
      height={235} 
      data={this.props.data}
      margin={{top: 10, right: 60, left: 15, bottom: 60}}
      >
        <CartesianGrid stroke='#f5f5f5'/>
        <XAxis type="number"/>
        <YAxis dataKey="name" type="category"/>
        <Tooltip/>
        <Bar dataKey='value' barSize={8} fill='#413ea0'>
        {
              this.props.data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]}/>
              ))
        }
        </Bar>
      </BarChart>
    );
  }
}

export default VerticalBarChart;


