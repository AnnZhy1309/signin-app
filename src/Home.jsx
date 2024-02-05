import React from 'react'
import Register from './Register'
import { Link } from 'react-router-dom'
import './Register.css'

function Home() {
  return (
    <div className='main'>
      <div className='gen' id='gen-home'>
        <div>
    <h1>Welcome to our page!</h1>
    <h3>Please log in :</h3>
    </div>
    <div id='links'>
    <Link to='/login' className="link">Login</Link>
    <br/>
    <Link to='/register' className="link">I don't have an account yet</Link>
    </div>
    </div>
    </div>
  )
}

export default Home