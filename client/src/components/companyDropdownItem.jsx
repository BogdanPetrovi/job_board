import React from 'react'

function CompanyDropdownItem(props) {
  return (
    <li><button className="dropdown-item" onClick={(e) => props.handleClick(e.target.innerHTML)} type="button">{props.value}</button></li>
  )
}

export default CompanyDropdownItem
