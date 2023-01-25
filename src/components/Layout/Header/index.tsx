import React from 'react'
import Image from 'next/image'

import Container from 'components/Container/index'
import Search from './Search'
import Nav from '../Nav'
import Button from 'components/Button'

import travelLogo from 'public/assets/travelo-logo-header.png'

const Header = () => {
  return (
    <header className="h-[85px] bg-white shadow-lg p-4 font-label">
      <Container>
        <div className='flex justify-between items-center'>
          <div className='flex gap-12'>
            <Image
              src={travelLogo}
              alt="Travelo Logo"
              placeholder='blur'
              height={48}
              width={182}
            />
            <Search />

          </div>
          <div className='flex gap-12'>
            <Nav />
            <Button
              onClick={() => console.log('clicked')}
            >
              Masuk
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header