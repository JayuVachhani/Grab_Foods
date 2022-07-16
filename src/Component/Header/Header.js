import React, { useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import MenuIcon from '@mui/icons-material/Menu'
import companyLogo from '../../assets/images/company_logo.png'
import './Header.css'

export const Header = () => {
  // toggle hamburger button based on screen size
  const menuRef = useRef(null)
  const toggleMenu = () => menuRef.current.classList.toggle('show__menu')
  const storeData = useSelector((state) => state.CartReducer)

  const nav = [
    { display: 'home', path: '/home' },
    { display: 'Foods', path: '/foods' },
    { display: 'Cart', path: '/cart' },
    { display: 'Contact', path: '/contact' },
  ]
  return (
    <header className="header">
      <div className="container">
        <div className="nav_wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={companyLogo} alt="logo" />
          </div>

          {/* Nav Links */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="navMenu d-flex align-items-center gap-5">
              {nav.map((navitem, index) => {
                return (
                  <NavLink
                    to={navitem.path}
                    key={index}
                    className={(navClass) =>
                      navClass.isActive ? 'nav_active' : ''
                    }
                  >
                    {navitem.display}
                  </NavLink>
                )
              })}
            </div>
          </div>

          {/* nav right */}
          <div className="nav_right d-flex align-items-center gap-3">
            <span className="cart_icon">
              <Link to="/cart">
                <ShoppingCartIcon fontSize="large" />
              </Link>

              <span className="cart_items">
                {storeData.cart.length > 0 ? storeData.cart.length : 0}
              </span>
            </span>

            <span className="user">
              <Link to={'/login'}>
                <AccountCircleIcon fontSize="large" />
              </Link>
            </span>
            <span className="mobile_menu" onClick={toggleMenu}>
              <MenuIcon />
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
