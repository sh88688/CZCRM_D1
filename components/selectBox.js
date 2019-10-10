import React, { Component } from 'react';

// function CreateOptions(obj){
// 	let objOption	=	JSON.parse(obj);
// 	let data	= Object.keys(objOption).map(val => <option value={val}>{objOption[val]}</option>);
// 	return data;
// }

class SelectBox extends Component{
	constructor(props)
	{
	  super(props);
	}

	CreateOptions = (obj) => {
		let objOption	=	JSON.parse(obj);
		let data	= Object.keys(objOption).map(val => <option value={val}>{objOption[val]}</option>);
		return data;
	}


	render(){
		const {label, func, name, options} = this.props;

		return(
			<div className="form-group px-2">
				<label className="control-label">
					{label}
				</label>
				<select name={name} onChange={func} className="form-control form-control-sm">
					{this.CreateOptions(options)}
				</select>
				<style jsx>{`
				.form-group {
					width: 185px;
				}
				`}
				</style>
			</div>
		);
	}
}

export default SelectBox;