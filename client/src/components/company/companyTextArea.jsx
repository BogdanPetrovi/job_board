import React from 'react'

function CompanyTextArea(props) {
  return (
    <>
      <label htmlFor="descirption" className='mt-4 mb-2'>Job description</label>
      <textarea 
      className="form-control" 
      id="description"
      onChange={(e) => props.getChange(e.target.value)}
      value={props.value}
      >
      </textarea>
    </>
  )
}

export default CompanyTextArea
