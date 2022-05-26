import styled from 'styled-components'

export const MessageRow = styled.div`
    display: flex;
    flex-direction: row;
    padding: 5px 20px 0px 20px;
    margin: 1px;
    justify-content: ${(props) => props.owner? 'flex-end': 'flex-start'};
    
`

export const CardMessage = styled.div`
    display: flex;
    flex-direction: column;
    padding: 8px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px -5px #000000;
    background-color:  ${(props) => props.owner ? '#DCF8C6': '#FFFFFF'};
    max-width: 350px;
    min-width: 100px;
    
`

export const Owner = styled.div`
    font-weight: bold;
    color: ${(props) => props.color}; 
    margin-bottom: 1px;
    
`

export const Text = styled.p`
    padding-top: 5px;
    word-wrap:break-word;
    word-break: break-all;
`

export const Time = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 12px;
`