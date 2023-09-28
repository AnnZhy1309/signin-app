import React from 'react'
import Register from './Register'
import { Link } from 'react-router-dom'
import './Register.css'

function Home() {
  return (
    <div className='main'>
      <div className='gen'>
    <h1>Welcome to our page!</h1>
    <h3>Please log in :</h3>
    <hr/>
    <Link to='/login'>Login</Link>
    <Link to='/register'>I don't have an account yet</Link>
    </div>
    </div>
  )
}

export default Home