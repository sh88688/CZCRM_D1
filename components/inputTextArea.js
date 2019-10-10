import React, { Component } from 'react';

class InputTextArea extends Component{
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
				<textarea rows='5' cols='58' onChange={func} className="form-control " type='text' name={name} />
		  </div>
		)
	}
}

export default InputTextArea