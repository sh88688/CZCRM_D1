import React, { Component } from "react";

class LoadingContent extends Component{
	constructor(props){
        super(props);
    }
	render(){
		return(
			<img style={{marginTop:"100px"}} src="https://loading.io/spinners/microsoft/lg.rotating-balls-spinner.gif" className="img-fluid" alt="" />
		);
	}
}

export default LoadingContent;
