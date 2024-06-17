import React from 'react';
import './App.css'
import MainContainer from './Components/MainContainer';
import Login from './Components/Login'
import { Routes, Route } from 'react-router-dom';
import Welcome from './Components/Welcome';
import ChatArea from './Components/ChatArea';
import Users from './Components/Users';
import Groups from './Components/Groups'
import CreateGroups from './Components/CreateGroups';
import SignUp from './Components/SignUp';


function App() {
  return <div className='App'>
      {/* <Login /> */}
      {/* <MainContainer /> */}
      <Routes >
        <Route path = '/' element = {<Login/>} />
        <Route path='signUp' element = {<SignUp />} />
        <Route path = "app" element = {<MainContainer />}>
          <Route path='welcome' element = {<Welcome />}></Route>
          <Route path='chat' element = {<ChatArea />}></Route>
          <Route path='users' element = {<Users />}></Route>
          <Route path='groups' element = {<Groups />}></Route>
          <Route path='create-groups' element = {<CreateGroups />}></Route>
        </Route>
      </Routes>
    </div>
}
  

export default App;
