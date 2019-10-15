import React, { Component, Fragment } from 'react';
import {MDBProgress, MDBCol, MDBRow} from "mdbreact";
import "../static/css/dashboard.css";

const TitleBuilder = ({value}) => (
    <Fragment><span className="float-left">{value.title}</span>
    <span className="float-right">{value.value}</span></Fragment>
);
const ProgTitle = ({value}) => (
    <Fragment><small className="text-muted"><span className="float-left">{value.title}
    </span><span className="float-right">{`(${value.value}) %`}</span></small></Fragment>
);

const Progress = ({value}) => (
<MDBProgress material animated value={value} height="4px" />
);

class CardContent extends Component{
    render(){
    const {config, data} = this.props;
    const columns = [
        {comp: TitleBuilder,data: {title: config.primary.title, value: data.primary.value }},
        {comp: Progress,data: data.primary.progress_value},
        {comp: ProgTitle,data: {title: config.primary.progress_title, value: data.primary.progress_value }},
        {comp: TitleBuilder,data: {title: config.secondary.title, value: data.secondary.value }},
        {comp: Progress, data: data.secondary.progress_value},
        {comp: ProgTitle,data: {title: config.secondary.progress_title, value: data.secondary.progress_value }}
    ];

        return(
            columns.map((column, index) => {
                let FunComponent = column.comp;
                return (
                <MDBRow key={index} className="my-2">
                <MDBCol>
                <FunComponent value={column.data}/>
                </MDBCol>
                </MDBRow>
            )}
            )
        );
    }
}

export default CardContent;