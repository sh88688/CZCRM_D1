import React, { Component } from 'react';
import { MDBIcon, MDBProgress, MDBCol, MDBRow, MDBCard, MDBCardBody, MDBCardText } from "mdbreact";

class CustomCard extends Component{
    render(){
        const {color, icon, primary, secondary} = this.props;
        return(
            <MDBCard className="hoverable">
                <MDBCardBody>
                    <MDBCardText>
                    <MDBIcon className={`${color}-text mr-2`} icon={icon} />{header}
                    </MDBCardText>
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
                            <MDBProgress material animated value={primary.progressValue} height="4px" />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className="my-1">
                            <MDBCol>
                            <small className="text-muted">
                            <span className="float-left">{primary.progressTitle}</span>
                            <span className="float-right">
                        {`(${primary.progressValue}) %`}
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
                            <MDBProgress material animated value={secondary.progressValue} height="4px" />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className="my-1">
                            <MDBCol>
                            <small className="text-muted">
                            <span className="float-left">{secondary.progressTitle}</span>
                            <span className="float-right">
                            {`(${secondary.progressValue}) %`}
                            </span>
                            </small>
                            </MDBCol>
                        </MDBRow>
                </MDBCardBody>
            </MDBCard>
        );
    }
}

export default CustomCard;
