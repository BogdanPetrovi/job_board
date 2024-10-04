import React, { useContext, useState } from 'react'
import Location from '../assets/location'
import Worker from '../assets/worker'
import findJobs from '../apis/findJobs';
import { Link } from 'react-router-dom';
import { JobsContext } from '../context/jobsContext';

function Form() {
  const [profession, setProfession] = useState("");
  const [location, setLocation] = useState("");
  const { setJobs } = useContext(JobsContext);

  function handleSubmit(e) {
    e.preventDefault();
    const fetchData = async () => {
      try {
        const response = await findJobs.get(`/${profession}/${location}`);
        setJobs(response.data.data.jobs);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }

  return (
    <div style={{width:"100%"}}>
      <form className='my-auto container' onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <div className="input-group mb-3">
            <span className="input-group-text"><Worker /></span>
            <input type="text" className="form-control" placeholder="Job title, profession" onChange={(e) => setProfession(e.target.value)} value={profession}/>
            <span className="input-group-text"><Location /></span>
            <input type="text" className="form-control" placeholder="Location" onChange={(e) => setLocation(e.target.value)} value={location}/>
            <Link to={'/search'} className="btn btn-primary">
              <button type="submit" className="btn btn-primary">Submit</button>
            </Link>
          </div>
        </div>
      </form>
      <div className="mx-auto p-2" style={{width:"fit-content"}}>
        <h4>Want to post <span>Job</span>?</h4>
      </div>
    </div>
    
  )
}

export default Form
