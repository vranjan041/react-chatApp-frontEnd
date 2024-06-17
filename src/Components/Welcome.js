import React from 'react'
import logo from '../icons/live-chat.png'

function Welcome() {
  return (
    <div className='welcome-container'>
        <img src={logo} alt='logo' className='welcome-logo' />
        <p>View and text poeple directly present in chat rooms.</p>
    </div>
  )
}

export default Welcome