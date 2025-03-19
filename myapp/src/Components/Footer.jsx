import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <div className='main'>
      <div className="foot">
        <div className="social">
            <h4>Social</h4>
           <ul>
            <li><a href="">Facebook</a></li>
            <li><a href="">Twitter</a></li>
            <li><a href="">YouTube</a></li>
           </ul>
        </div>
        <div className="ser">
            <h4>Service</h4>
           <ul>
            <li><a href="">Compare</a></li>
            <li><a href="">Download</a></li>
            <li><a href="">Feedback</a></li>
           </ul>
        </div>
        <div className="act">
            <h4>Activity</h4>
           <ul>
            <li><a href="">Influences</a></li>
            <li><a href="">Honor</a></li>
            <li><a href="">Giveaway</a></li>
           </ul>
        </div>
        
      </div>
      <h4 id='copy'>Copyright@2025,All rights reserved</h4>
    </div>
  )
}
