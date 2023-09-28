import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Register.css'

function Register() {
    const[values, setValues] = useState({
        name:'',
        email:'',
        password:''
    })

    const handleSubmit = event => {
        event.preventDefault();
        axios.post('http://localhost:8080/register', values)
        .then (res => res.data)
        .then (json => console.log(json))
        .catch(err => console.error('sup', err))
    }

  return (
    <div className="main">
        <div className="gen">
            <h2>Sign-Up</h2>
            <form onSubmit={handleSubmit} className='form'>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input type='text' 
                    onChange={e=>setValues({...values, name:e.target.value})}
                    placeholder='Enter Name' name='name'/>
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='text' 
                    onChange={e=>setValues({...values, email:e.target.value})}
                    placeholder='Enter Email' name='email'/>
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='password' 
                    onChange={e=>setValues({...values, password:e.target.value})}
                    placeholder='Enter password' name='password'/>
                </div>
                <button type='submit' className='button'>Sign Up</button>
                <p>You agree with terms and conditions</p>
                <Link to='/login'>Login</Link>
            </form>
        </div>
    </div>
  )
}

export default Register