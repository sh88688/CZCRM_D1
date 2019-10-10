import React from 'react'

const TextBox = (props) => {
	return (
		<div className="form-group px-2">
			<label className="control-label">
				{props.label}
			</label>
			<input type='text' onChange={props.func} className="form-control form-control-sm" name={props.name} />
	  </div>
	)

}
export default TextBox