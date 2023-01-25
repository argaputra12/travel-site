import React from 'react'

import Container from 'components/Container'
import PromoCarousel from './PromoCarousel'

const SecondSection = () => {
  return (
    <section className="pb-16 bg-second-section bg-top bg-no-repeat bg-contain">
      <Container size='xl'>
        <PromoCarousel/>
      </Container> 
    </section>
  )
}

export default SecondSection