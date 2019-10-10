import React, { Fragment } from 'react';
import {MDBProgress, MDBCol, MDBRow} from "mdbreact";
import "../Styles/dashboard.css";
const CardContent = (props) => {
    const {primary, secondary} = props.data;
    return(
        <Fragment>
            <MDBRow className="my-2">
                <MDBCol>
                <span className="float-left">{primary.title}</span>
                <span className="float-right">
                {primary.value}
                </span>
                </MDBCol>
            </MDBRow>
            <MDBRow className="my-2">
                <MDBCol>
                <MDBProgress material animated value={primary.progress_value} height="4px" />
                </MDBCol>
            </MDBRow>
            <MDBRow className="my-1">
                <MDBCol>
                <small className="text-muted">
                <span className="float-left">{primary.progress_title}</span>
                <span className="float-right">
                {`(${primary.progress_value}) %`}
                </span>
                </small>
                </MDBCol>
            </MDBRow>
            <MDBRow className="my-2">
                <MDBCol>
                <span className="float-left">{secondary.title}</span>
                <span className="float-right">
                {secondary.value}
                </span>
                </MDBCol>
            </MDBRow>
            <MDBRow className="my-2">
                <MDBCol>
                <MDBProgress material animated value={secondary.progress_value} height="4px" />
                </MDBCol>
            </MDBRow>
            <MDBRow className="my-1">
                <MDBCol>
                <small className="text-muted">
                <span className="float-left">{secondary.progress_title}</span>
                <span className="float-right">
                {`(${secondary.progress_value}) %`}
                </span>
                </small>
                </MDBCol>
            </MDBRow>
        </Fragment>
    );
}

export default CardContent;