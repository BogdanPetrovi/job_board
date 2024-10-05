import React, { useContext, useEffect } from 'react'
import { JobsContext } from '../context/jobsContext'
import { useParams } from 'react-router-dom'
import findJobs from '../apis/findJobs'
import Form from '../components/form';
import Header from '../components/header';
import Footer from '../components/footer';
import JobsContent from '../components/jobsContent';

function Jobs() {
  const {profession} = useParams();
  const {location} = useParams();
  const { setJobs } = useContext(JobsContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(profession);
        console.log(location);
        const result = await findJobs.get(`/${profession}/${location}`);
        const jobs = result.data.data.jobs; 
        console.log(jobs);
        setJobs(jobs);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
    },[profession, location, setJobs])

  return (
    <div className='main'>
      <Header />
      <Form hidden="true" />
      <JobsContent />
      <Footer />
    </div>
  )
}

//TO DO'S: 1. CHECK ON CONTEXT IS IT WORKING PROPERLY
//         2. /SEARCH ADD PARAMS SO IF USER SAVE SITE AS BOOKMARS FOR EXAMPLE HE CAN SEE THE SITE AND SITE WONT CRASH

export default Jobs
