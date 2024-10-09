import React, { useEffect, useState } from 'react'
import CompanyNameInput from './company/companyNameInput';
import CompanyTextInput from './company/companyTextInput';
import CompanyTextArea from './company/companyTextArea';
import CompanyDropdown from './company/companyDropdown';
import CompanyRadio from './company/companyRadio';
import CompanySalary from './company/companySalary';
import findPeople from '../apis/findPeople';
import { useNavigate } from 'react-router-dom'

function NewJobStartContent() {
  const [companyId, setCompanyId] = useState(null);
  const [jobName, setJobName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [avaliablePlaces, setAvaliablePlaces] = useState('Select an option');
  const [type, setType] = useState(null);
  const [minSalary, setMinSalary] = useState(0);
  const [maxSalary, setMaxSalary] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    function checkValidity() {
      if(companyId !== null &&
         jobName !== '' &&
         location !== '' &&
         description !== '' &&
         avaliablePlaces !== 'Select an option' &&
         type !== null &&
         minSalary !== '' && minSalary !== 0 && 
         maxSalary !== ''
      ){
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    }

    checkValidity();
  },[companyId, jobName, location, description, avaliablePlaces, type, minSalary, maxSalary])

  function getCompany(id) {
    setCompanyId(id);
  }

  function handleChange(value, name) {
    if(name === 'name') {
      setJobName(value);
    } else if(name === 'location') {
      setLocation(value);
    } else if(name === 'description') {
      setDescription(value);
    } else if(name ==='avaliableSpaces') {
      setAvaliablePlaces(value);
      console.log(value);
    } else if(name ==='type') {
      setType(value);
    } else if(name === 'minSalary'){
      setMinSalary(value);
    } else if(name === 'maxSalary') {
      setMaxSalary(value);
      console.log(value);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await findPeople.post('/add/job', {
        companyid: companyId,
        name: jobName,
        description,
        location,
        avaliableSpaces: avaliablePlaces,
        type,
        minSal: minSalary,
        maxSal: maxSalary
      });
      navigate(`/search/${jobName}/${location}`);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <form className='container d-flex flex-column form-width w-50' onSubmit={(e) => handleSubmit(e)} >
        <CompanyNameInput getCompany={id => getCompany(id) }/>
        <CompanyTextInput 
          rowName="name" 
          title="Job title" 
          value={jobName} 
          getChange={(value, name) => handleChange(value,name)} 
        />
        <CompanyTextInput 
          rowName="location" 
          title="Job location"
          value={location} 
          getChange={(value, name) => handleChange(value,name)} 
          underInput="For example the name of city or remote job" 
        />
        <CompanyTextArea 
          value={description}
          getChange={value => handleChange(value,'description')} 
        />
        <CompanyDropdown
          value={avaliablePlaces}
          getChange={value => handleChange(value, 'avaliableSpaces')}
        />
        <CompanyRadio
          getChange={value => handleChange(value, 'type')}
        />
        <CompanySalary
          minSalary={minSalary}
          maxSalary={maxSalary}
          getChange={(value, name) => handleChange(value, name)}
        />
        <input type="submit" className='btn btn-primary mt-4' style={{width:"13rem", alignSelf:"center"}} disabled={isDisabled} />
        {isDisabled ? <div className="form-text mt-0" style={{alignSelf:"center"}}>You need to fill all rows</div> : null}
        <div className='mb-4'></div>
      </form>
    </div>
  )
}

export default NewJobStartContent
