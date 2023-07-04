import React from 'react'
import styled from "styled-components";
import { db } from '../config/firebase';
import { useDispatch } from 'react-redux';
import { enterRoom } from '../features/appSlice';

const SideBarOption = ({ id, Icon, title, addChannelOption }) => {
    const dispatch = useDispatch()

    const addChannel = () => {
        const channelName = prompt("plz enter the channel name");
        if (channelName) {
            db.collection('rooms').add({
                name: channelName,
            })
        }
    }

    const selectChannel = () => {
        if (id) {
            dispatch(enterRoom({
                roomId: id
            }))
        }
    }



    return (
        <SideBarOptionContainer
            onClick={addChannelOption ? addChannel : selectChannel}
        >
            {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}

            {Icon ? (
                <h3>{title}</h3>
            ) : (
                <SideBarOptionChannel>
                    <span>#</span>{title}
                </SideBarOptionChannel>)
            }

        </SideBarOptionContainer>
    )
}

export default SideBarOption

const SideBarOptionContainer = styled.div`
  display:flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;

  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }

  > h3 {
    font-weight: 500;
  }

  > h3 > span {
    padding: 15px;
  }
`;

const SideBarOptionChannel = styled.div`
  padding: 10px;
  font-weight: 300;

`;