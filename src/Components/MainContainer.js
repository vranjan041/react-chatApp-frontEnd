import React, {useState} from "react";
import './myStyles.css'
import SideBar from "./SideBar";
import ChatArea from "./ChatArea";
import Welcome from "./Welcome";
import CreateGroups from "./CreateGroups";
import Groups from "./Groups";
import Users from "./Users";
import { Outlet } from "react-router-dom";

function MainContainer() {
    
    return <div className="main-container">
        <SideBar />
        <Outlet />
        {/* <Welcome /> */}
        {/* <CreateGroups /> */}
        {/* <ChatArea props={conversations[0]}/> */}
        {/* <Users /> */}
        {/* <Groups /> */}

    </div>
}

export default MainContainer