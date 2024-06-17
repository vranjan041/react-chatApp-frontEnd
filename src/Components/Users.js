import React from 'react'
import './myStyles.css'
import logo from '../icons/live-chat.png'
import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { AnimatePresence,motion } from 'framer-motion';

function Users() {
  return (
    <AnimatePresence>
    <motion.div
    initial = {{opacity:0, scale:0}}
    animate={{opacity:1, scale:1}}
    exit={{opacity:0,scale:0}}
    transition={{
        ease: "anticipate",
        duration: "0.3"
    }}
    className='list-container'>
        <div className='list-container-header'>
            <img src={logo} alt='logo' 
            style={ {width: "2rem", height:"2rem"}}
            />
            <p className='con-title'>Online Users</p>
        </div>
        <div className='sb-search'>
            <IconButton>
                <SearchIcon />
            </IconButton>
            <input className='search-box' placeholder='Search Users'></input>
        </div>
        <div className='ug-list'>
            <div className='list-item'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test User</p>
            </div>
            <div className='list-item'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test User</p>
            </div>
            <div className='list-item'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test User</p>
            </div>
            <div className='list-item'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test User</p>
            </div>
            <div className='list-item'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test User</p>
            </div>
            <div className='list-item'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test User</p>
            </div>
            <div className='list-item'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test User</p>
            </div>
            <div className='list-item'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test User</p>
            </div>
            <div className='list-item'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test User</p>
            </div>
            <div className='list-item'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test User</p>
            </div>
            <div className='list-item'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test User</p>
            </div>
            <div className='list-item'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test User</p>
            </div>
            <div className='list-item'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test User</p>
            </div>
            <div className='list-item'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test User</p>
            </div>
        </div>
    </motion.div>
    </AnimatePresence>
  )
}

export default Users