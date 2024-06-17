import React from 'react'
import logo from '../icons/live-chat.png'
import { Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function SignUp() {
    const navigate = useNavigate()
    return (
        <div className='loginPage-container'>
            <div className='loginPage-logo'>
                <img src={logo} alt='logo' className='welcome-logo'/>
            </div>
            <div className='loginPage-cred'>
                <p>Create your Account</p>
                <TextField id="outlined-basic" label="UserName" variant="outlined" />
                <TextField id="outlined-basic" label="Email" variant="outlined" />
                <TextField id="outlined-basic" label="Password" type='password' variant="outlined" autoComplete='current-password'/>
                <Button variant="outlined">Sign Up</Button>
                <div style={{display:"flex", gap:'5px'}}>
                    <p style={{fontSize:'18px'}}>Already have an account?</p>
                    <a onClick={()=>{navigate('/')}} style={{color:"purple", fontSize:"18px"}}>Login</a>
                </div>
            </div>
        </div>
      )
}

export default SignUp