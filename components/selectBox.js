import React from 'react'

function CreateOptions(obj){
	let objOption	=	JSON.parse(obj);
	let data	= Object.keys(objOption).map(val => <option value={val}>{objOption[val]}</option>);
	return data;
}
const SelectBox = (props) => {
	return (
		<div className="form-group px-2">
			<label className="control-label">
          		{props.label}
			</label>
			<select name={props.name} onChange={props.func} className="form-control form-control-sm">
				{CreateOptions(props.options)}
			</select>
			<style jsx>{`
			.form-group {
				width: 185px;
			}
			`}
			</style>
		</div>
	)
}
export default SelectBox