import React from 'react'
import './styles/navbar.css'
const Navbar = () => {
  return (
    <nav>
      <div className="max-width">
        <div className="logo">Faisal Gym</div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Membership</a></li>
        </ul>
      </div>

    </nav>
  )
}

export default Navbar