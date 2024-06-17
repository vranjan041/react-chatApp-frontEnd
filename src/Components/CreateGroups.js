import React from 'react'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { IconButton } from '@mui/material';
import { AnimatePresence,motion } from 'framer-motion';

function CreateGroups() {
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
    className='createGroups-container'>
        <input className='search-box' placeholder='Enter group name'/>
        <IconButton>
            <DoneOutlineIcon />
        </IconButton>
    </motion.div>
    </AnimatePresence>
  )
}

export default CreateGroups