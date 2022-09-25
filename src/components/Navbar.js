import React, { useEffect, useRef, useState } from 'react'
import './styles/navbar.css'
import logo from './styles/images/logo.svg'
import Close from './styles/assets/webfonts/close-line.svg'
import Menu from './styles/assets/webfonts/menu-line.svg'
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
    if (e.target.alt !== "show") {
      setToggle(null);
    }
    else {
      setToggle('show-menu');
    }
  }

  return (
    <>
      <header>
        {/* <div className="container">
          <span>Call:</span> +92 321 2179202
        </div> */}
        <div className="nav container">
          <a href='#' className='nav-logo'>
            <img src={logo} alt="" />
          </a>
          {/* <img src={logo} alt="" /> */}
          <div className={`nav-menu ${toggle}`} ref={menuRef}>
            <ul className='nav-list'>
              <h2>MENU</h2>
              <li className='nav-item'><a href="#home" className='nav-link' onClick={onClickHandle}>Home</a></li>
              <li className='nav-item'><a href="#home" className='nav-link' onClick={onClickHandle}>About</a></li>
              <li className='nav-item'><a href="#home" className='nav-link' onClick={onClickHandle}>Program</a></li>
              <li className='nav-item'><a href="#home" className='nav-link' onClick={onClickHandle}>Pricing</a></li>
              <li className='nav-item'><a href="#home" className='nav-link' onClick={onClickHandle}>Contact</a></li>
              <div className="nav-link">
                <a href="#home" className='button nav-button' onClick={onClickHandle}>Membership</a>
              </div>
            </ul>
            <div className="nav-close" onClick={onClickHandle}>
              <img src={Close} alt="close" />
            </div>
          </div>

          {/* Toggle Button */}

          <div className="nav-toggle" onClick={onClickHandle}>
            <img src={Menu} alt="show" />
          </div>

          {/* Toggle Button */}

        </div>
      </header>
    </>
  )
}

export default Navbar