import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className="container">
<div className="logo">
<Link to="/">  <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo%2C-hotel-logo-%289%29-design-template-a498a5179cf7277f9fe66fe93f0024a5_screen.jpg?ts=1693343026" alt="" /></Link>
</div>

       <ul className="nav">
       <li> <Link to="/">Home</Link></li>
       <li> <Link to="about">About Us</Link></li>
       <li><Link to="Type"> Recipes</Link></li>
        </ul>
      </div>
    </div>
  )
}
