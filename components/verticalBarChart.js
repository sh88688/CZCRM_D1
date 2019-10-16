import React, { Component } from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell} from 'recharts';
import PropTypes from "prop-types";
// const VerticalBarchart = React.createClass({ See why error in this
class VerticalBarChart extends Component{
    render () {
      const {data} = this.props;
      const colors = ["#0712B3", "#006600", "#7C8AEE", "#cc0066", "#993300"];
      return (
        <BarChart 
        layout="vertical" 
        width={400} 
        height={235} 
        data={data}
        margin={{top: 10, right: 60, left: 15, bottom: 60}}
        >
          <CartesianGrid stroke='#f5f5f5'/>
          <XAxis type="number"/>
          <YAxis dataKey="name" type="category"/>
          <Tooltip/>
          <Bar dataKey='value' barSize={8} fill='#413ea0'>
          {
                data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]}/>
                ))
          }
          </Bar>
        </BarChart>
      );
  }
}
VerticalBarChart.propTypes = {
  data: PropTypes.array.isRequired,
}
export default VerticalBarChart;


