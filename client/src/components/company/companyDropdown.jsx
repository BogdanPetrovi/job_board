import React from 'react'
import CompanyDropdownItem from './companyDropdownItem'

function CompanyDropdown(props) {
  return (
    <div>
      <label htmlFor="dropwdown" className='mt-4 mb-2'>Number of people to hire for this job</label>
      <div className="dropdown" id="dropdown">
      <button className="btn btn-light dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        {props.value}
      </button>
      <ul className="dropdown-menu w-100">
        {Array.from(Array(10), (e, i) =>{
          return <CompanyDropdownItem key={i} value={i + 1} handleClick={(value) => props.getChange(value)} />
        })}
        <CompanyDropdownItem key={11} value={"10+"} handleClick={(value) => props.getChange(value)} />
      </ul>
    </div>
    </div>
  )
}

export default CompanyDropdown
