import React, { useContext, useEffect, useState } from 'react'
import { JobsContext } from '../context/jobsContext'
import './jobsContent.css'
import Location from '../assets/location'
import Clock from '../assets/clock'
import Money from '../assets/money'
import Open from '../assets/open'
import findJobs from '../apis/findJobs'

function JobsContent() {
  const { jobs } = useContext(JobsContext);
  const [selectedJob, setSelectedJob] = useState([]);
  const [selectedJobApplies, setSelectedJobApplies] = useState([]);

  async function getApplies(id) {
    try {
      const result = await findJobs.get(`/get/apply/${id}`)
      setSelectedJobApplies(result.data.data.applies);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    if(jobs.length > 0){
      setSelectedJob(jobs[0]);
      getApplies(jobs[0].id);
    }
  },[jobs, setSelectedJob])

  function handleClick(job) {
    setSelectedJob(job);
    getApplies(job.id);
  }

  return (
    <div className='container'>
    {jobs.length > 0 ? 
      <div className="d-flex">
        <div className='info'>
          {jobs.map((job, index) => (
            <div className="border p-2 pb-0 rounded mb-2" onClick={() => handleClick(job) } key={index}>
              <h3 className='mb-0'>{job.job_name}</h3>
              <p className='lead mb-0'>{job.name}</p>
              <p className='mb-0'><Location heigth="1.5rem" width="1.5rem" /> {job.location}</p>
              <p><Clock /> {job.type}</p>
            </div>
        ))}
        </div>
        <div className='full-job border rounded mb-3'>
          <div className="header py-3 px-4">
            <h1 className='mb-1'>{selectedJob.job_name}</h1>
            <a href={`/${selectedJob.name}/details`}><h4 className='mb-1'>{selectedJob.name}</h4></a>
            <h4>{selectedJob.location}</h4>
            <a href={`/apply/${selectedJob.id}`}><button className='btn btn-primary'>Apply now <Open /></button></a>
          </div>
          <div className="details pt-3 pb-1 px-4 border-bottom">
            <h2>Job details</h2>
            <div>
              <h5><Money /> Pay: {selectedJob.min_salary && selectedJob.min_salary === selectedJob.max_salary ?
                selectedJob.min_salary :
                selectedJob.min_salary + "-" + selectedJob.max_salary
              }</h5>
              <h5><Clock /> Type: {selectedJob.type} </h5>
            </div>
          </div>
          <div className="description pt-3 pb-1 px-4 border-bottom">
            <h2>Job description</h2>
            <p className='lead'>{selectedJob.job_description}</p>
          </div>
          <div className="company pt-3 pb-1 px-4 border-bottom">
            <h2>Company description</h2>
            <p className='lead'>{selectedJob.description}</p>
          </div>
          <div className="applies pt-3 pb-1 px-4 border-bottom">
            <h2>Applies</h2>
            {selectedJobApplies.map((apply, index) => (
              <div key={index}>
                <p className='lead' >{apply.name}</p>
                <p className='lead' >{apply.date}</p>
              </div>
              
            ))}
          </div>
        </div>
      </div>  
      :
      <div className="container d-flex align-items-center flex-column">
        <h1>We currently don't have jobs with set criteria</h1>
        <p className='lead'>Check again later</p>
      </div>
    }
    </div>
  )
}

export default JobsContent
