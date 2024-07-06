import React, {useState} from 'react'
import './index.css'

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const toggleLogin = () => {
    setIsLoggedIn(prevState => !prevState)
  }

  return (
    <div className="home-container">
      <h1>{isLoggedIn ? 'Welcome User' : 'Please Login'}</h1>
      <button onClick={toggleLogin} className="button">
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  )
}

export default Home
