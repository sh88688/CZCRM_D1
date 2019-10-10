import React from 'react'

const InputTextArea = (props) => {
	return (
		<div className="form-group px-2">
			<label className="control-label">
				{props.label}
			</label>
			<textarea rows='5' cols='58' onChange={props.func} className="form-control " type='text' name={props.name} />
	  </div>
	)

}
export default InputTextArea