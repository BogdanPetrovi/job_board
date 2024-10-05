import React from 'react'

function Footer() {
  const d = new Date();
  const year = d.getFullYear();

  return (
    <footer className="border-top p-3">
      <div className="container d-flex justify-content-between">
        <h5>Copyright@{year}</h5>
        <div>
          <a href='https://www.instagram.com/bogdanpet_/' rel="noreferrer" target='_blank' className='px-2' >Instagram</a>
          <a href='https://x.com/Gibo_BP' rel="noreferrer" target='_blank' className='px-2' >Twtiter</a>
          <a href='https://github.com/BogdanPetrovi/' rel="noreferrer" target='_blank' className='px-2' >GitHub</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
