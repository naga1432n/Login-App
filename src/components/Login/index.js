import React from 'react'
import './index.css'

const Login = ({onLogin}) => {
  return (
    <button className="Login-button" onClick={onLogin}>
      Login
    </button>
  )
}

export default Login
