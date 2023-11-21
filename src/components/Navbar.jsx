import React from 'react'
import '../styles/Navbar.css'
import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='container'>
        
          <h4 className='logo'>**komser.org</h4>
          <div className='links'>
          <Link className='linkAnaSayfa' to="/">Ana Sayfa</Link>
          <Link className='linkKitaplar' to="/books">Kitaplar</Link>
          <Link className='linkHakkimizda' to="/about">Hakkımızda</Link>
          <Link className='linkIletisim' to="/contact">İletişim</Link>
          </div>


    </div>
  )
}
