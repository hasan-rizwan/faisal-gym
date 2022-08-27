import React from 'react'
import './styles/navbar.css'
const Navbar = () => {
  return (
    <nav>
      <div className="max-width">
        <div className="logo">Faisal Gym</div>
        <ul>
          <li><a href="https://google.com">Home</a></li>
          <li><a href="https://google.com">About</a></li>
          <li><a href="https://google.com">Services</a></li>
          <li><a href="https://google.com">Pricing</a></li>
          <li><a href="https://google.com">Contact</a></li>
          <li><a href="https://google.com">Membership</a></li>
        </ul>
      </div>

    </nav>
  )
}

export default Navbar