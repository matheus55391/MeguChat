import styled from 'styled-components'

export const CardContactBody = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    height: 65px;
    border-top: 1px solid #ededed;
    background-color: transparent;
    
    &:hover{
        background-color: #ededed;

    }
    cursor: pointer;   
    
`


export const NomeContato = styled.h3`
    font-weight: bold;
    color: gray;
    
`
