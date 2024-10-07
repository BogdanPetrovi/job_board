import React, { useState } from 'react'
import findPeople from '../apis/findPeople';
import { useNavigate } from 'react-router-dom';

function NewCompanyForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [industry, setIndustry] = useState("");
  const [description, setDescription] = useState("");
  const [isHidden, setIsHidden] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    async function uploadData() {
      try {
        await findPeople.post('/add/company',{
          name,
          industry,
          description
        });
        navigate('/new/job/start');
      } catch (err) {
        console.log(err);
        setIsHidden(false);
      }
    }

    uploadData();
  }

  return (
    <>
    <div class="alert alert-danger my-3 container w-50" role="alert" hidden={isHidden}>
      All rows are required!
    </div>
    <form className='container d-flex flex-column w-50' onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="name" className='form-label'>Company's name</label>
      <input type="text" id='name' className='form-control' maxLength={30} onChange={(e) => setName(e.target.value)}/>
      <label htmlFor="industry" className='form-label'>Company's industry</label>
      <input type="text" id='industry' className='form-control' maxLength={30} onChange={(e) => setIndustry(e.target.value)} />
      <label htmlFor="description" className='form-label'>Company's description</label>
      <textarea class="form-control" id="description" maxLength={1500} onChange={(e) => setDescription(e.target.value)}></textarea>
      <input type="submit" className='btn btn-primary mt-4' style={{width:"8rem", alignSelf:"center"}}/>
    </form>
    </>
    
  )
}

export default NewCompanyForm
