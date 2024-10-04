import React, { useContext } from 'react'
import { JobsContext } from '../context/jobsContext'

function Jobs() {
  const { jobs } = useContext(JobsContext)
  console.log(jobs);
  return (
    <div>
      <h1>{jobs[0].name}</h1>
    </div>
  )
}

//TO DO'S: 1. CHECK ON CONTEXT IS IT WORKING PROPERLY
//         2. /SEARCH ADD PARAMS SO IF USER SAVE SITE AS BOOKMARS FOR EXAMPLE HE CAN SEE THE SITE AND SITE WONT CRASH

export default Jobs
