import React from 'react'
export default function Header() {
    return (
      <div className='header'>
        <div className='header-container'>
          <h2 style={{ color: 'darkgray', fontSize: '2rem' }}>Welcome</h2>
          <ul className='header-list'>
            <li className='header-list-item'>Home</li>
            <li className='header-list-item'>About</li>
            <li className='header-list-item'>Contact</li>
          </ul>
        </div>
      </div>
    )
  }
