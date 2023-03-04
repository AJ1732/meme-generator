import React from 'react'
import trollFace from '../image/troll-face.png'

const Header = () => {
  return (
    <header>
      <div className='meme-logo'>
        <img className='meme-icon' src={trollFace} alt="" />
        <h2 className='logo-text'>Meme Generator</h2>
      </div>

      <p className="course">React Course - Project 3</p>
    </header>
  )
}

export default Header