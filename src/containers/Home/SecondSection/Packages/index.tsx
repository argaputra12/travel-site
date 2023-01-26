import React from 'react'

import PackageCard from './PackageCard'

import BromoImage from 'public/assets/home/bromo.png'

const Packages = () => {
  return(
    <>
      <h3 className='text-heading-3 text-white font-label font-bold pt-14 mb-1'>
        Paket Liburan Populer
      </h3>
      <p className='text-heading-4 text-white mb-4'>
        Paket rekomendasi yang paling banyak dicari
      </p>

      <div className='flex justify-between'>
        <PackageCard 
          image={{
            src: BromoImage,
            alt: 'Bromo'
          }}
        />
        <PackageCard 
          image={{
            src: BromoImage,
            alt: 'Bromo'
          }}
        />
        <PackageCard 
          image={{
            src: BromoImage,
            alt: 'Bromo'
          }}
        />
      </div>
    </>
  )
}

export default Packages