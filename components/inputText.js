import React, { Component } from 'react';

class TextBox extends Component{
	constructor(props){
        super(props);
    }
    render(){
		const {label, func, name} = this.props;
		
		return (
			<div className="form-group px-2">
				<label className="control-label">
					{label}
				</label>
				<input type='text' onChange={func} className="form-control form-control-sm" name={name} />
		  </div>
		)
	}
}

export default TextBox;