import React, { useState } from 'react'
import './myStyles.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';
import SearchIcon from '@mui/icons-material/Search';
import './ConversationsItem'
import ConversationsItem from './ConversationsItem';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../Features/themeSlice';
import { light } from '@mui/material/styles/createPalette';

function SideBar() {
const dispatch = useDispatch()
const navigate = useNavigate()
const lightTheme = useSelector((state) => state.themeKey)

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
  return (
    <div className='SideBar-container'>
        <div className={"sb-header " + (lightTheme ? '' : "dark")}>
            <div>
                <IconButton>
                    <AccountCircleIcon className={'icon' + (lightTheme ? '' : ' dark')} />
                </IconButton>
            </div>
            <div>
                <IconButton>
                    <PersonAddIcon className={(lightTheme ? '' : ' dark')} onClick ={()=>{navigate('/app/users')}}/>
                </IconButton> 
                <IconButton>
                    <GroupAddIcon className={(lightTheme ? '' : ' dark')} onClick ={()=>{navigate('/app/groups')}} />
                </IconButton>  
                <IconButton>
                    <AddCircleIcon className={(lightTheme ? '' : ' dark')} onClick ={()=>{navigate('/app/create-groups')}} />
                </IconButton>  
                <IconButton onClick={()=>{dispatch(toggleTheme())}}>
                    {
                        lightTheme && (
                            <NightlightIcon className={"icon " + (lightTheme ? '' : "dark")} />
                        )
                    }
                    {
                        !lightTheme && (
                            <LightModeIcon className={"icon " + (lightTheme ? '' : "dark")} />
                        )
                    }
                </IconButton> 
            </div>   
                     
        </div>
        <div className={"sb-search " + (lightTheme ? '' : "dark")}>
            <IconButton>
                <SearchIcon className={(lightTheme ? '' : ' dark')}/>
            </IconButton>
            <input placeholder='search' className={'search-box' + (lightTheme ? '' : ' dark')}/>
        </div>
        <div className={"sb-conversations" + (lightTheme ? '' : " dark")}>
            
                {conversations.map((conversation) => {
                    return <ConversationsItem props = {conversation} key={conversation.name} />
                })}
            
        </div>
    </div>
  )
}

export default SideBar