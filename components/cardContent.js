import React, { Component, Fragment } from 'react';
import {MDBProgress, MDBCol, MDBRow} from "mdbreact";
import "../static/css/dashboard.css";

class CardContent extends Component{
    render(){
    const {config, data} = this.props;

    const col1 =  <Fragment><span className="float-left">{config.primary.title}</span>
                <span className="float-right">{data.primary.value}</span></Fragment>;

    const col2 =  <MDBProgress material animated value={data.primary.progress_value} height="4px" />;

    const col3 = <Fragment><small className="text-muted"><span className="float-left">{config.primary.progress_title}
                </span><span className="float-right">{`(${data.primary.progress_value}) %`}</span></small></Fragment>;

    const col4 = <Fragment><span className="float-left">{config.secondary.title}</span><span className="float-right">
    {data.secondary.value}</span></Fragment>;

    const col5 = <MDBProgress material animated value={data.secondary.progress_value} height="4px" />;

    const col6 = <Fragment><small className="text-muted"><span className="float-left">{config.secondary.progress_title}</span><span className="float-right">{`(${data.secondary.progress_value}) %`}</span></small></Fragment>;

        return(
            [col1,col2,col3,col4,col5,col6].map(column => {
                <MDBRow className="my-2">
                <MDBCol>
                    {column}
                </MDBCol>
                </MDBRow>
            })
        );
    }
}

export default CardContent;