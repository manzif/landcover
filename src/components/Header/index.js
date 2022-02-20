import React from 'react'
import styled from '@emotion/styled'

const Navbar = styled.nav`
  padding: 1rem;
  background-color: rgba(0, 0, 51, 0.8);
`
const NavContainer = styled.div`
  max-width: 1080px;
  margin: auto
`

export default function Header({ toggleMenu, menuVisible }) {
  return (
    <div>
      <Navbar className='navbar-wrapper'>
        <NavContainer className='d-flex align-items-center justify-content-space-between'>
          <div className='site- text-uppercase'>Schools connectivity Map <span className='text-bold'>Dashboard</span></div>
          <div className='d-flex align-items-center site-navigation' onClick={() => { console.log(`clicked ${menuVisible}`); toggleMenu(!menuVisible) }}><span className='mr-sm'>Menu</span> <img alt='menu icon' src='/assets/icons/menu.svg' /></div>
        </NavContainer>
      </Navbar>
    </div>
  )
}
