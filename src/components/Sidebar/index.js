import React from 'react';
import { useLocation, Link } from 'react-router-dom'
import './index.css';

export default function Sidebar({ menuVisible }) {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div className={`sidebar-wrapper ${menuVisible ? 'show' : 'hide'}`}>
      <ul className='list-style-none'>
        <Link to='/'>
          <li className={`d-flex align-items-center justify-content-space-between ${pathname === '/' ? 'active' : ''}`}>
            <div className='d-flex'>
              <img src='/assets/icons/map.svg' alt='home icon' className='mr-sm' /> Map View
            </div>
            <div><img src='/assets/icons/chevron-right.svg' alt='chevron icon' /></div>
          </li>
        </Link>
        <Link to='/insight'>
          <li className={`d-flex align-items-center justify-content-space-between ${pathname === '/insight' ? 'active' : ''}`}>
            <div className='d-flex'>
              <img src='/assets/icons/map.svg' alt='map icon' className='mr-sm' /> Methodology
            </div>
            <div><img src='/assets/icons/chevron-right.svg' alt='chevron icon' /></div>
          </li>
        </Link>
      </ul>
      <div>
      </div>
    </div>
  )
}
