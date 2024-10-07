import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import NewJobStartContent from '../components/newJobStartContent';

function NewJobStart() {
  return (
    <div className="home">
      <Header />
      <NewJobStartContent />
      <Footer />
    </div>
    
  )
}

export default NewJobStart
