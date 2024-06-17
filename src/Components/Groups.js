import React from 'react'
import './myStyles.css'
import logo from '../icons/live-chat.png'
import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux';
import { motion } from "framer-motion";
import { AnimatePresence } from 'framer-motion';

function Groups() {
    const lightTheme = useSelector((state) => state.themeKey)
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
                <div className={"list-container-header" + (lightTheme ? '' : " dark")}>
                    <img src={logo} alt='logo' 
                    style={ {width: "2rem", height:"2rem"}}
                    />
                    <p className={"con-title" + (lightTheme ? '' : " dark")}>Available Groups</p>
                </div>
                <div className={'sb-search' + (lightTheme ? '' : ' dark')}>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <input className={'search-box' + (lightTheme ? '' : ' dark')} placeholder='Search Groups'></input>
                </div>
                <div className='ug-list'>
                <motion.div 
                        whileHover={{scale: 1.01}} 
                        whileTap={{scale : 0.98}}
                        className={'list-item' + (lightTheme ? '' : ' dark')}>
                        <p className='con-icon'>T</p>
                        <p className='con-title'>Test User</p>
                    </motion.div>
                    <motion.div 
                        whileHover={{scale: 1.01}} 
                        whileTap={{scale : 0.98}}
                        className={'list-item' + (lightTheme ? '' : ' dark')}>
                        <p className='con-icon'>T</p>
                        <p className='con-title'>Test User</p>
                    </motion.div><motion.div 
                        whileHover={{scale: 1.01}} 
                        whileTap={{scale : 0.98}}
                        className={'list-item' + (lightTheme ? '' : ' dark')}>
                        <p className='con-icon'>T</p>
                        <p className='con-title'>Test User</p>
                    </motion.div><motion.div 
                        whileHover={{scale: 1.01}} 
                        whileTap={{scale : 0.98}}
                        className={'list-item' + (lightTheme ? '' : ' dark')}>
                        <p className='con-icon'>T</p>
                        <p className='con-title'>Test User</p>
                    </motion.div><motion.div 
                        whileHover={{scale: 1.01}} 
                        whileTap={{scale : 0.98}}
                        className={'list-item' + (lightTheme ? '' : ' dark')}>
                        <p className='con-icon'>T</p>
                        <p className='con-title'>Test User</p>
                    </motion.div>
                    <motion.div 
                        whileHover={{scale: 1.01}} 
                        whileTap={{scale : 0.98}}
                        className={'list-item' + (lightTheme ? '' : ' dark')}>
                        <p className='con-icon'>T</p>
                        <p className='con-title'>Test User</p>
                    </motion.div>
                    <motion.div 
                        whileHover={{scale: 1.01}} 
                        whileTap={{scale : 0.98}}
                        className={'list-item' + (lightTheme ? '' : ' dark')}>
                        <p className='con-icon'>T</p>
                        <p className='con-title'>Test User</p>
                    </motion.div><motion.div 
                        whileHover={{scale: 1.01}} 
                        whileTap={{scale : 0.98}}
                        className={'list-item' + (lightTheme ? '' : ' dark')}>
                        <p className='con-icon'>T</p>
                        <p className='con-title'>Test User</p>
                    </motion.div><motion.div 
                        whileHover={{scale: 1.01}} 
                        whileTap={{scale : 0.98}}
                        className={'list-item' + (lightTheme ? '' : ' dark')}>
                        <p className='con-icon'>T</p>
                        <p className='con-title'>Test User</p>
                    </motion.div><motion.div 
                        whileHover={{scale: 1.01}} 
                        whileTap={{scale : 0.98}}
                        className={'list-item' + (lightTheme ? '' : ' dark')}>
                        <p className='con-icon'>T</p>
                        <p className='con-title'>Test User</p>
                    </motion.div>
                </div>
            </motion.div>
        </AnimatePresence>
      )
}

export default Groups