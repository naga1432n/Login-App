import React from 'react'
import './index.css'

const Message = ({isLoggedIn}) => {
  return (
    <h1 className="message">{isLoggedIn ? 'Welcome User' : 'Please Login'}</h1>
  )
}

export default Message
