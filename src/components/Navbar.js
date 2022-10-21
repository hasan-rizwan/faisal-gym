import React, { useEffect, useRef, useState } from 'react'
import './styles/navbar.css'
import logo from './styles/assets/images/logo.svg'
import CloseLine from './styles/assets/webfonts/CloseLine'
import MenuLine from './styles/assets/webfonts/MenuLine'
import FacebookCircleFill from './styles/assets/webfonts/FacebookCircleFill'
import { Link } from 'react-scroll'
import { animateScroll as scroll } from 'react-scroll'
import CopyToClipboard from 'react-copy-to-clipboard'

const Navbar = () => {
  const [copyBtnText, setCopyBtnText] = useState("Tap To Copy");
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  // Logic to close Menu when Clicked outside

  useEffect(() => {
    let handler = (event) => {
      if (
        menuRef &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler)
    }
  })

  // Logic to close Menu when Clicked on links or close Svg

  const onClickHandle = () => {
    setShowMenu(!showMenu);
  }
  return (
    <>
      <header className='header'>
        <div className="call-to-action">
          <div className="container">
            <div className="phone">
              <CopyToClipboard text='+92 321 2179202'>
                <button className='button-cta' onClick={() => setCopyBtnText('Copied')}>{copyBtnText}</button>
              </CopyToClipboard>
              +92 321 2179202
            </div>
            <div className="social-links">
              <FacebookCircleFill />
            </div>
          </div>
        </div>
        <div className="nav container">
          <Link to='/' className='nav-logo' onClick={() => scroll.scrollToTop()}>
            <img src={logo} alt="" />
          </Link>
          <div className={`nav-menu ${showMenu ? 'show-menu' : ''}`} ref={menuRef}>
            <ul className='nav-list'>
              <h2>MENU</h2>
              <li className='nav-item'><Link spy={true} smooth={true} offset={-100} duration={0} to="home" className='nav-link' onClick={onClickHandle}>Home</Link></li>
              <li className='nav-item'><Link spy={true} smooth={true} offset={-100} duration={0} to="about" className='nav-link' onClick={onClickHandle}>About</Link></li>
              <li className='nav-item'><Link spy={true} smooth={true} offset={-100} duration={0} to="program" className='nav-link' onClick={onClickHandle}>Program</Link></li>
              <li className='nav-item'><Link spy={true} smooth={true} offset={-100} duration={0} to="whyUs" className='nav-link' onClick={onClickHandle}>Why Us</Link></li>
              <li className='nav-item'><Link spy={true} smooth={true} offset={-100} duration={0} to="pricing" className='nav-link' onClick={onClickHandle}>Pricing</Link></li>
              <li className='nav-item'><Link spy={true} smooth={true} offset={-100} duration={0} to="contact" className='nav-link' onClick={onClickHandle}>Contact</Link></li>
              <div className="nav-link">
                <Link to="home" className='button nav-button' onClick={onClickHandle}>Membership Coming Soon</Link>
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