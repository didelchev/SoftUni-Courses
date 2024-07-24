import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className='header'>
      <div className="header-content">
        <h1>Find your furever friend</h1>
            <div className="btn-container">
                <button className='cta-button'>I want to adopt a pet</button>
                <button className='cta-button'>I want to rehome my pet</button>
            </div>
        

      </div>
    </div>
  )
}
