import { Avatar } from '@mui/material';
import React from 'react'
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <HeaderContainer>
            {/* header Left */}
            <HeaderLeft>
                {/* todo add on click */}
                <HeaderAvatar
                    onClick={() => { auth.signOut() }}
                    alt={user?.displayName}
                    src={user?.photoURL}
                />
                <AccessTimeIcon />
            </HeaderLeft>

            {/* header Search */}
            <HeaderSearch>

                <SearchIcon />
                <input placeholder="Search" />

            </HeaderSearch>

            {/* header Right */}
            <HeaderRight>

                <HelpOutlineIcon />

            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header
const HeaderSearch = styled.div`
   flex:0.4;
   opacity: 1;
   border-radius: 6px;
   background-color: #421f44;
   text-align: center;
   display: flex;
   padding: 0 50px;
   color: gray;
   border: 1px gray solid;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw; 
    outline: 0;
    color: white;
    }
`

const HeaderContainer = styled.div`
 display: flex;
   position: fixed;
   width: 100%;
   align-items: center;
   justify-content: space-between;
   padding:10px 0;
   background-color: var(--slack-color);
   color: white;
`;

const HeaderLeft = styled.div`
flex: 0.3; 
   display: flex;
   align-items: center;
   margin-left: 30px;

   > .MuiSvgIcon-root {
     margin-left: auto;
     margin-right: 30px;
   }
`;


const HeaderRight = styled.div`
   flex:0.3;
   display: flex;
   align-items: flex-end;

   > .MuiSvgIcon-root {
      margin-left: auto;
      margin-right: 20px;
   }
`


const HeaderAvatar = styled(Avatar)`
cursor: pointer;
:hover {
  opacity: 0.8;
}

`;