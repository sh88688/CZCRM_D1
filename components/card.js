import React from 'react';
import { MDBIcon, MDBCol, MDBCard, MDBCardBody, MDBCardText } from "mdbreact";
import "../Styles/dashboard.css";
const Cards = (props) => {
    const {config, content} = props;   //Can use type received in props???

    return(
        <MDBCol sm="4" className="py-3 mt-2 ">
            <MDBCard className="hoverable cardShadow">
                <MDBCardBody className="pt-2 overflowHidden">
                    <MDBCardText className="pb-3">
                        <span className={`iconHovered p-3 ${config.color}-gradient`}>
                        <MDBIcon className={`white-text`} size="2x" icon={config.icon} />
                        </span>
                        <span className="float-right">
                        {config.header}
                        </span>
                    </MDBCardText>
                    {content}
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    );
}

export default Cards;