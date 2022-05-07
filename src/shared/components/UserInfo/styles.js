import styled from 'styled-components'
// import * as fluentUISystemFilled from '@styled-icons/fluentui-system-filled'
import { Settings } from '@styled-icons/fluentui-system-filled/Settings'
export const Container = styled.div`
    background-color: #F0F2F5;  
    grid-area: UI;
    display: flex;
    flex-direction: row;    
    align-items: center;
    padding: 10px 16px;

`

export const UserInfoRow = styled.div`
  
`

export const ButtonsRow = styled.div`
    height: 100%;    
    margin-left: auto;
    margin-right: px;
    display: flex;
    flex-direction: row;    
    
`

export const ConfigButton = styled(Settings)`
    height: 100%;
    color:gray;
` 