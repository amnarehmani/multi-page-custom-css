import React from 'react'
import '@/app/styles/explore.css'
import Image from 'next/image'
function Explore() {
  return (
    <div className='explore'>
        <h2>Explore our international hotels</h2>
    <section id="pictures">
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-sm-6">
          <div className="image-properties">
            <Image src="/images/01.avif" alt='hotel 01'
            width={500}
            height={500}
            />
            <div className="text-properties">
              <h2>LONDON</h2>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="image-properties">
          <Image src="/images/02.avif" alt='hotel 02'
            width={500}
            height={500}
            />
            <div className="text-properties">
              <h2>BANGKOK</h2>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="image-properties">
            <Image src="/images/03.avif" alt='hotel 03'
            width={500}
            height={500}
            />
            <div className="text-properties">
              <h2>TOKYO</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Explore;
