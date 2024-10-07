import React, { useState } from 'react'
import Location from '../assets/location'
import Worker from '../assets/worker'
import { Link } from 'react-router-dom';

function Form(props) {
  const [profession, setProfession] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div style={{width:"100%"}}>
      <form className='my-auto mt-4 container'>
        <div className="form-group">
          <div className="input-group mb-3">
            <span className="input-group-text"><Worker /></span>
            <input type="text" className="form-control" placeholder="Job title, profession" onChange={(e) => setProfession(e.target.value)} value={profession}/>
            <span className="input-group-text"><Location height="2rem" width="2rem" /></span>
            <input type="text" className="form-control" placeholder="Location" onChange={(e) => setLocation(e.target.value)} value={location}/>
            <Link to={`/search/${profession}/${location}`} className="btn btn-primary">
              <button type="submit" className="btn btn-primary">Submit</button>
            </Link>
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
