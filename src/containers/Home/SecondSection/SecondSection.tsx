import React from 'react'

import Container from 'components/Container'
import PromoCarousel from './PromoCarousel/PromoCarousel'
import Packages from './Packages/Packages'
import Categories from './Categories/Categories'
import Testimonials from './Testimonials/Testimonials'

const SecondSection = () => {
  return (
    <section className="pb-16 bg-second-section bg-top bg-no-repeat bg-contain">
      <Container size='xl'>
        <PromoCarousel/>
        <Packages/>
        <Categories/>
        <Testimonials/>
      </Container> 
    </section>
  )
}

export default SecondSection