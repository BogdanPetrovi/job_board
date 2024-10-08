import React, { useEffect, useState } from 'react'
import findPeople from '../../apis/findPeople';


function CompanyNameInput(props) {
  const [companies, setCompanies] = useState([]);
  const [company, setCompany] = useState('');
  const [exist, setExist] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await findPeople.get('/companies');
      setCompanies(result.data.data);
    }

    fetchData();
  }, [setCompany])

  function handleChange(e) {
    setCompany(e.target.value);

    const result = companies.filter((company) => company.name.toLowerCase() === e.target.value.toLowerCase())
    if(result.length > 0) {
      setExist(true)
      props.getCompany(result[0].id);
    } else {
      setExist(false)
      props.getCompany(null)
    }
  }
  return (
    <>
      {exist ?
      <><label htmlFor="name" className='form-label text-success'>Company name</label>
      <input type="text" id='name' className='form-control border border-success' value={company} onChange={handleChange} required /></>        
      :
      <><label htmlFor="name" className='form-label text-danger'>Company name</label>
      <input type="text" id='name' className='form-control border border-danger' value={company} onChange={handleChange} required />
      <div className="form-text mt-0">This company doesn't exist in out database.</div></>
    }
    </>
  )
}

export default CompanyNameInput
