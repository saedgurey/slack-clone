import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import styled from "styled-components";
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Chat from './components/Chat';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Login from './components/Login';


const App = () => {
  const [user, loading] = useAuthState(auth);
  return (
    <div className='app'>
      <BrowserRouter>

      {!user ? (<Login/>):
      (
        <>
        <Header />
        <AppBody>
          <Sidebar/>
          <Routes>

            <Route path="/" element={<Chat/>} />

          </Routes>
        </AppBody>
      
      </>
      )}
      
    </BrowserRouter>
    </div>
  )
}

export default App

const AppBody = styled.div`
display: flex;
height: 100vh;
`;

const AppLoading = styled.div`
   display:grid;
   place-items:center;
   height: 100vh;
   width:100%;
`

const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;

`