import React from 'react'

import NavItem from './NavItem'

const Nav = () => {
  return(
    <nav className="flex items-center gap-6">
      <NavItem href="/" name="Beranda" />
      <NavItem href="/kontak" name="Kontak" />
      <NavItem href="/paket" name="Paket" />
      <NavItem href="/testimoni" name="Testimoni" />
    </nav>
  )
}

export default Nav