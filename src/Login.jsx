import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Register.css'

export default function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({});

  const handleInput =(event)=>{
    setValues(prev=> ({...prev, [event.target.name]: [event.target.value]}))
  }

  const handleSubmit =(event)=>{
    event.preventDefault();
  }

  return (
<div className='main'>
    <div className='gen'>
    <h2>Sign-In</h2>
      <form onSubmit={handleSubmit} className='form'>
        <div>
            <label htmlFor='email'><strong>Email</strong></label>
            <input onChange={handleInput} type='text' placeholder='Enter Email' name='email'/>
        </div>
        <div>
            <label htmlFor='password'><strong>Password</strong></label>
            <input onChange={handleInput} type='password' placeholder='Enter password' name='password'/>
        </div>
        <button type='submit' className='button'>Log in</button>
        <p>You agree with terms and conditions</p>
        <Link to='/register'>Create account</Link>
    </form>
    </div>
</div>
  )
}
