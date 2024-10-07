import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import NewCompanyForm from '../components/newcompanyform'

function NewCompany() {
  return (
    <div className='main'>
      <Header />
      <NewCompanyForm />
      <Footer />
    </div>
  )
}

export default NewCompany
