import styled from 'styled-components'
// import * as fluentUISystemFilled from '@styled-icons/fluentui-system-filled'
import { Logout } from '@styled-icons/material/Logout'

export const Container = styled.div`
    background-color: #F0F2F5;  
    grid-area: UI;
    display: flex;
    flex-direction: row;    
    align-items: center;
    padding: 15px 5px;

`

export const ImgBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;    
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin: 0px 8px 0px 8px;
    padding: 5px;
    cursor: pointer;
    flex-shrink: 0;
    background-color: var(--symbol);
    overflow:hidden;
`

export const UserPicture = styled.img`
    width: 140%;
    height: 140%;
`

export const UserInfoRow = styled.div`
    display: flex;
    flex-direction: row; 
    align-items: center;
`

export const ButtonsRow = styled.div`
    height: 100%;    
    margin-left: auto;
    margin-right: px;
    display: flex;
    flex-direction: row;    
    
`

export const LogoutButton = styled(Logout)`
    height: 100%;
    color:gray;
    cursor: pointer;
    :hover {
        color: black;
    }
` 