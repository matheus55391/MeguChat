import styled from 'styled-components'

export const Container = styled.div`
    background-color: #F0F2F5;  
    grid-area: CI;
    display: flex;
    flex-direction: row;    
    align-items: center;
    border-left: 2px solid rgba(28,110,164,0.45);
    padding: 0px 10px;

`

export const SingOutButton = styled.button`
    margin-left:  auto;
    height: 100%;
    min-width: 80px;
    font-size: 14px;
    background-color: transparent;
    font-weight: bold;
    :hover{
        background-color: #e1e5eb;
    }
`