import React from 'react'

function CompanyRadio(props) {
  function handleClick(e){
    props.getChange(e.target.innerHTML);
  }

  return (
    <>
      <label htmlFor="radios" className='mt-4 mb-2'>Job type</label>
      <div className='btn-group btn-group-toggle' id='radios'>
        <input type="radio" className="btn-check" name="options-base" id="full" autoComplete="off" />
        <label className="btn" htmlFor="full" onClick={(e) => handleClick(e)}>Full-time</label>

        <input type="radio" className="btn-check" name="options-base" id="part" autoComplete="off" />
        <label className="btn" htmlFor="part" onClick={(e) => handleClick(e)}>Part-time</label>

        <input type="radio" className="btn-check" name="options-base" id="temp" autoComplete="off" />
        <label className="btn" htmlFor="temp" onClick={(e) => handleClick(e)}>Temporary</label>

        <input type="radio" className="btn-check" name="options-base" id="internship" autoComplete="off" />
        <label className="btn" htmlFor="internship" onClick={(e) => handleClick(e)}>Internship</label>
      </div>
    </>
  )
}

export default CompanyRadio
