import React from 'react'

function CompanyTextInput(props) {
  return (
    <>
      <label htmlFor={props.rowName} className='form-label mt-4'>{props.title}</label>
      <input type="text" id={props.rowName} className='form-control' value={props.value} onChange={(e) => props.getChange(e.target.value, props.rowName)} required autoComplete='false' />
      <div className="form-text mt-0">{props.underInput && props.underInput}</div>
    </>
  )
}

export default CompanyTextInput
