import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newletter'>
      <h1>GET EXCLUSIVE OFFERS ON YOUR EMAIL</h1>
      <p>SUBSCRIBE TO OUR NEWS LETTER AND STAY UPDATED</p>
      <div>
        <input type="email" placeholder='Your Email Id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
