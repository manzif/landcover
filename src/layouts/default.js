import React from 'react'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import './default.css';

const DefaultLayout = ({ children }) => {

  return (
    <div>
      {/* <Header toggleMenu={toggleMenu} menuVisible={menuVisible} /> */}
      <div className='app-grid'>
        <Sidebar menuVisible='true' />
        <div>
          {children}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default DefaultLayout;
