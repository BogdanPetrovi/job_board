import React, { useState } from 'react'
import Location from '../assets/location'
import Worker from '../assets/worker'
import { useNavigate } from 'react-router-dom';

function Form(props) {
  const [profession, setProfession] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if(profession === "") {
      if(location === ""){
        navigate('/search/all/all')
      } else {
        navigate(`/search/all/${location}`)
      }
    } else if(location === "") {
      navigate(`/search/${profession}/all`)
    } else {
      navigate(`/search/${profession}/${location}`)
    }
  }

  return (
    <div style={{width:"100%"}}>
      <form className='my-auto mt-4 container'>
        <div className="form-group">
          <div className="input-group mb-3" >
            <span className="input-group-text"><Worker /></span>
            <input type="text" className="form-control" placeholder="Job title, profession" onChange={(e) => setProfession(e.target.value)} value={profession}/>
            <span className="input-group-text"><Location height="2rem" width="2rem" /></span>
            <input type="text" className="form-control" placeholder="Location" onChange={(e) => setLocation(e.target.value)} value={location}/>
            <button type="submit" className="btn btn-primary" style={{height:'3.5rem'}} onClick={(e) => handleSubmit(e)}>Submit</button>
          </div>
        </div>
      </form>
      <div className="mx-auto p-2" style={{width:"fit-content"}} hidden={props.hidden}>
        <h4>Want to post <a href="/new/job"><span>Job</span></a>?</h4>
      </div>
    </div>
    
  )
}

export default Form
