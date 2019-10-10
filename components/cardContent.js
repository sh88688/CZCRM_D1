import React, { Component, Fragment } from 'react';
import {MDBProgress, MDBCol, MDBRow} from "mdbreact";
import "../static/css/dashboard.css";

class CardContent extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {config, data} = this.props;
        return(
            <Fragment>
                <MDBRow className="my-2">
                    <MDBCol>
                    <span className="float-left">{config.primary.title}</span>
                    <span className="float-right">
                    {data.primary.value}
                    </span>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="my-2">
                    <MDBCol>
                    <MDBProgress material animated value={data.primary.progress_value} height="4px" />
                    </MDBCol>
                </MDBRow>
                <MDBRow className="my-1">
                    <MDBCol>
                    <small className="text-muted">
                    <span className="float-left">{config.primary.progress_title}</span>
                    <span className="float-right">
                    {`(${data.primary.progress_value}) %`}
                    </span>
                    </small>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="my-2">
                    <MDBCol>
                    <span className="float-left">{config.secondary.title}</span>
                    <span className="float-right">
                    {data.secondary.value}
                    </span>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="my-2">
                    <MDBCol>
                    <MDBProgress material animated value={data.secondary.progress_value} height="4px" />
                    </MDBCol>
                </MDBRow>
                <MDBRow className="my-1">
                    <MDBCol>
                    <small className="text-muted">
                    <span className="float-left">{config.secondary.progress_title}</span>
                    <span className="float-right">
                    {`(${data.secondary.progress_value}) %`}
                    </span>
                    </small>
                    </MDBCol>
                </MDBRow>
            </Fragment>
        );
    }
}

export default CardContent;