import React, { useState } from 'react'
import CompanyTextInput from './companyTextInput';

function CompanySalary(props) {
  const [isExact, setIsExact] = useState(true);

  function handleClick(val) {
    setIsExact(val);
  }

  return (
    <>
      <label htmlFor="salary" className='mt-4 mb-2'>Job salary</label>
      <div className='btn-group' id='salary'>
        <input type="radio" className="btn-check" name="option-base" id="exact" autoComplete="off" defaultChecked />
        <label className="btn" htmlFor="exact" onClick={() => {handleClick(true); props.getChange(0, 'maxSalary')} }>Exact salary</label>

        <input type="radio" className="btn-check" name="option-base" id="vary" autoComplete="off" />
        <label className="btn" htmlFor="vary" onClick={() => handleClick(false)}>Salary may vary</label>
      </div>
      
        {isExact ?
          <><CompanyTextInput 
              title={"Enter salary ($)"}
              rowName={"minSalary"}
              value={props.minSalary}
              getChange={(value, name) => props.getChange(value, name)} />
          </>
          : 
          <><CompanyTextInput 
              title={"Enter minimum salary ($)"}
              rowName={"minSalary"}
              value={props.minSalary}
              getChange={(value, name) => props.getChange(value, name)} />
              <CompanyTextInput 
              title={"Enter maximum salary ($)"}
              rowName={"maxSalary"}
              value={props.maxSalary}
              getChange={(value, name) => props.getChange(value, name)} 
              />
          </>
        }
        {props.minSalary > props.maxSalary && isExact === false ? 
          <div class="alert alert-danger my-3 container w-100" role="alert">
            Maximum salary have to be bigger than minimum salary
          </div> : null 
        }

      
    </>
  )
}



export default CompanySalary
