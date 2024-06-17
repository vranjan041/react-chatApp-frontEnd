import React from 'react'
import logo from '../icons/live-chat.png'
import { Button, TextField } from '@mui/material'
import SignUp from './SignUp'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  return (
    <div className='loginPage-container'>
        <div className='loginPage-logo'>
            <img src={logo} alt='logo' className='welcome-logo'/>
        </div>
        <div className='loginPage-cred'>
            <p>Login into your Account</p>
            <TextField id="outlined-basic" label="UserName" variant="outlined" />
            <TextField id="outlined-basic" label="Password" type='password' variant="outlined" autoComplete='current-password'/>
            <Button variant="outlined">Login</Button>
            <div style={{display:"flex", gap:'5px'}}>
              <p style={{fontSize:'18px'}}>Don't have an account?</p>
              <a onClick={()=>{navigate('/signUp')}} style={{color:"purple", fontSize:"18px"}}>Sign Up</a>
            </div>
        </div>
    </div>
  )
}

export default Login