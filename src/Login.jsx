import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './Register.css'
import axios from 'axios'

export default function Login() {

  const[values, setValues] = useState({
    email:'',
    password:''
})
const navigate= useNavigate();

const handleSubmit = event => {
    event.preventDefault();
    axios.post('http://localhost:8080/login', values)
    .then (res => {
        if(res.data.Status === "Success"){
            navigate('/')
        }else{
            alert("Error")
        }
    })
    .then (json => console.log(json))
    .catch(err => console.error('Submitting error', err))
}


  return (
<div className='main'>
    <div className='gen'>
    <h2>Sign-In</h2>
      <form onSubmit={handleSubmit} className='form'>
        <div>
            <label htmlFor='email'>Email</label>
            <input  onChange={e=>setValues({...values, email:e.target.value})} type='text' className='input' placeholder='Enter Email' name='email' />
        </div>
        <div>
            <label htmlFor='password'>Password</label>
            <input  onChange={e=>setValues({...values, password:e.target.value})} type='password' className='input' placeholder='Enter password' name='password'/>
        </div>
        <button type='submit' className='button'>Log in</button>
        <br/>
        <Link to='/register' className="link">Create account</Link>
        <br/>
        <Link to='/' className="link">Home</Link>
    </form>
    </div>
</div>
  )
}
