import React,{useState} from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import './MessageSelf'
import './MessageOthers'
import MessageOthers from './MessageOthers';
import MessageSelf from './MessageSelf';
import './myStyles.css'
import { AnimatePresence,motion } from 'framer-motion';

function ChatArea({props}) {
    const [conversations, setConversations] = useState([
        {
            name: "Test#1",
            lastMessage: "Last Message 1",
            timeStamp: "today",
        },
        {
            name: "Test#2",
            lastMessage: "Last Message 2",
            timeStamp: "today",
        },
        {
            name: "Test#3",
            lastMessage: "Last Message 3",
            timeStamp: "today",
        },
      ])
      var props = conversations[0]
  return (
    <AnimatePresence>

    <motion.div 
    initial = {{opacity:0, scale:0}}
    animate={{opacity:1, scale:1}}
    exit={{opacity:0,scale:0}}
    transition={{
        ease: "anticipate",
        duration: "0.3"
    }}className='ChatArea-container'>
        <div className='chat-area-header'>
            <p className='con-icon'>{props.name[0]}</p>
            <div className='header-text'>
                <p className='con-title'>{props.name}</p>
                <p className='con-lastMessage'>{props.timeStamp}</p>
            </div>
            <IconButton>
                <DeleteIcon />
            </IconButton>
        </div>
        <div className='message-container'>
            <MessageOthers />
            <MessageSelf />
            <MessageOthers />
            <MessageSelf />
            <MessageOthers />
            <MessageSelf />
            <MessageOthers />
            <MessageSelf />
        </div>
        <div className='text-input-area'>
            <input placeholder='Type a message' className='search-box' />
            <IconButton>
                <SendIcon />
            </IconButton>
        </div>
    </motion.div>    
    </AnimatePresence>
  )
}

export default ChatArea