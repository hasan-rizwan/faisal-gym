import React, { useEffect, useRef, useState } from 'react'
import './styles/navbar.css'
import logo from './styles/assets/images/logo.svg'
import CloseLine from './styles/assets/webfonts/CloseLine'
import MenuLine from './styles/assets/webfonts/MenuLine'
import FacebookCircleFill from './styles/assets/webfonts/FacebookCircleFill'
import { animateScroll as scroll, Link } from 'react-scroll'
import { NavLink } from 'react-router-dom'
import CopyToClipboard from 'react-copy-to-clipboard'
import { HashLink } from 'react-router-hash-link'

const Navbar = ({ branchNav }) => {
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
      <header className='header bg-header'>
        <div className="call-to-action">
          <div className="container">
            <div className="phone">
              <CopyToClipboard text='+92 321 2179202'>
                <button className='button-cta' onClick={() => setCopyBtnText('Copied')}>{copyBtnText}</button>
              </CopyToClipboard>
              +92 321 2179202
            </div>
            <div className="social-links">
              <a href="https://www.facebook.com/faisalsgym/" target={'_blank'} rel="noreferrer"><FacebookCircleFill /></a>
            </div>
          </div>
        </div>
        <div className="nav container">
          {/* Links from react-router for branch component */}
          {
            branchNav === 'reactRouter' ?
              <NavLink to='/' className='nav-logo'>
                <img src={logo} alt="Logo" />
              </NavLink>
              :
              <Link to='/' className='nav-logo' onClick={() => scroll.scrollToTop()}>
                <img src={logo} alt="Logo" />
              </Link>
          }
          <div className={`nav-menu ${showMenu ? 'show-menu' : ''}`} ref={menuRef}>
            {
              branchNav === 'reactRouter' ?

                <ul className='nav-list'>
                  <h2>MENU</h2>
                  <li className='nav-item'><NavLink to={"/"} className='nav-link' onClick={onClickHandle}>Home</NavLink></li>
                  <li className='nav-item'><HashLink to={"/#program"} className='nav-link' onClick={onClickHandle}>Program</HashLink></li>
                  <li className='nav-item'><HashLink to={"/#branches"} className='nav-link' onClick={onClickHandle}>Branches</HashLink></li>
                  <div className="nav-link">
                    <NavLink className='button button-secondary nav-button' onClick={onClickHandle}>Membership Coming Soon</NavLink>
                  </div>
                </ul>
                :
                <ul className='nav-list'>
                  <h2>MENU</h2>
                  <li className='nav-item'><Link spy={true} smooth={true} offset={-100} duration={0} to={"home"} className='nav-link' onClick={onClickHandle}>Home</Link></li>
                  <li className='nav-item'><Link spy={true} smooth={true} offset={-100} duration={0} to={"program"} className='nav-link' onClick={onClickHandle}>Program</Link></li>
                  <li className='nav-item'><Link spy={true} smooth={true} offset={-100} duration={0} to={"branches"} className='nav-link' onClick={onClickHandle}>Branches</Link></li>
                  <div className="nav-link">
                    <Link to={"hero"} className='button button-secondary nav-button' onClick={onClickHandle}>Membership Coming Soon</Link>
                  </div>
                </ul>
            }
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