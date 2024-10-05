import React, {  useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import findJobs from '../apis/findJobs';

function Apply() {
  const {id} = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");

  function handleClick(e) {
    e.preventDefault();

    const fetchApply = async () => {
      try {
        await findJobs.post('/apply', {
          jobid: id,
          name
        });
      } catch (err) {
        console.log(err)
      }
      navigate(-1)
    }

    fetchApply();
  }

  return (
    <div className='container mt-5'>
      <form>
        <div className="mb-3">
          <label for="name" className="form-label">Your name</label>
          <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          <div id="emailHelp" className="form-text">Your informations will be visible on our site</div>
        </div>
        <button type="submit" className="btn btn-primary" onClick={(e) => handleClick(e)}>Confirm</button>
      </form>
    </div>
  )
} 


export default Apply
