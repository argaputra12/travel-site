import React from 'react'

import Container from 'components/Container'
import PromoCarousel from './PromoCarousel'
import Packages from './Packages'
import Categories from './Categories'
import Testimonials from './Testimonials'

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