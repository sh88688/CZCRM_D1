import React from 'react';
import {MDBCol, MDBCard, MDBCardBody, MDBCardText } from "mdbreact";
import "../Styles/dashboard.css";
const ChartCard = (props) => {
    const {chart, title} = props;
    return(
        <MDBCol sm="12" lg="6" md="6" xl="4" className="py-2">
        <MDBCard className="overflowHidden hoverable cardShadow">
          <MDBCardBody>
            <MDBCardText>
              {title}
            </MDBCardText>
            {chart}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    );
}

export default ChartCard;