import React, { useState } from 'react'
import CompanyNameInput from './companyNameInput';
import CompanyTextInput from './companyTextInput';
import CompanyTextArea from './companyTextArea';
import CompanyDropdown from './companyDropdown';

function NewJobStartContent() {
  const [companyId, setCompanyId] = useState(null);
  const [jobName, setJobName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [avaliablePlaces, setAvaliablePlaces] = useState('Select an option');

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
    }
  }

  return (
    <div>
      <form className='container d-flex flex-column form-width w-50' >
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
      </form>
    </div>
  )
}


//TO DO'S: 1.ADD JOB TYPE AND SALARY
//         2.CHANGE TABLE SO AVALIABLE SPACE IS NOT NUMBER BUT TEXT
//         3.MAKE SUBFOLDER IN COMPONENTS AND PUT ALL COMPONENTS WHICH WERE USED IN THIS FILE

export default NewJobStartContent
