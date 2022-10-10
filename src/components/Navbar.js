import React, { useEffect, useRef, useState } from 'react'
import './styles/navbar.css'
import logo from './styles/assets/images/logo.svg'
import CloseLine from './styles/assets/webfonts/CloseLine'
import MenuLine from './styles/assets/webfonts/MenuLine'
import FacebookCircleFill from './styles/assets/webfonts/FacebookCircleFill'

const Navbar = () => {
  const [toggle, setToggle] = useState(null)
  const menuRef = useRef(null);
  useEffect(() => {
    let handler = (event) => {
      if (
        menuRef &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setToggle(null);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler)
    }
  })

  const onClickHandle = (e) => {
    if (e.target.className.animVal !== "show") {
      setToggle(null);
    }
    else {
      setToggle('show-menu');
    }
  }

  return (
    <>
      <header className='header'>
        <div className="call-to-action">
          <div className="container">
            <div className="phone">
              <button className='button-cta'>Tap To Copy</button> +92 321 2179202
            </div>
            <div className="social-links">
              <FacebookCircleFill />
            </div>
          </div>
        </div>
        <div className="nav container">
          <a href='/' className='nav-logo'>
            <img src={logo} alt="" />
          </a>
          <div className={`nav-menu ${toggle}`} ref={menuRef}>
            <ul className='nav-list'>
              <h2>MENU</h2>
              <li className='nav-item'><a href="#home" className='nav-link' onClick={onClickHandle}>Home</a></li>
              <li className='nav-item'><a href="#about" className='nav-link' onClick={onClickHandle}>About</a></li>
              <li className='nav-item'><a href="#program" className='nav-link' onClick={onClickHandle}>Program</a></li>
              <li className='nav-item'><a href="#whyUs" className='nav-link' onClick={onClickHandle}>Why Us</a></li>
              <li className='nav-item'><a href="#pricing" className='nav-link' onClick={onClickHandle}>Pricing</a></li>
              <li className='nav-item'><a href="#contact" className='nav-link' onClick={onClickHandle}>Contact</a></li>
              <div className="nav-link">
                <a href="#home" className='button nav-button' onClick={onClickHandle}>Membership Coming Soon</a>
              </div>
            </ul>
            <div className="nav-close" onClick={onClickHandle}>
              <CloseLine />
            </div>
          </div>

          {/* Toggle Button */}

          <div className="nav-toggle" onClick={onClickHandle}>
            <MenuLine />
          </div>

          {/* Toggle Button */}

        </div>
      </header>
    </>
  )
}

export default Navbar