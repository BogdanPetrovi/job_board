import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { Link } from 'react-router-dom'

function NewJob() {
  return (
    <div className='home'>
      <Header />
        <div className="container d-flex flex-column align-items-center">
        <h2>Have you registred company on our site?</h2>
        <div>
          <Link to={'/new/job/start'}><button type='button' className='btn btn-primary btn-lg'>Yes</button></Link>
          <Link to={'/new/company'}><button type='button' className='mx-4 btn btn-outline-primary btn-lg'>No</button></Link>
        </div>
        
        </div>
        <div></div>
        <div></div>
      <Footer />
    </div>
  )
}

export default NewJob
