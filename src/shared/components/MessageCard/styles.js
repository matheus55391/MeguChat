import styled from 'styled-components'

export const MensagemRow = styled.div`
    display: flex;
    flex-direction: row;
    padding: 5px 20px 0px 20px;
    margin: 1px;
    justify-content: ${(props) => props.msgAutor? 'flex-end': 'flex-start'};
    
`

export const MensagemCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 8px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px -5px #000000;
    background-color:  ${(props) => props.msgAutor? '#DCF8C6': '#FFFFFF'};
    max-width: 400px;
    min-width: 100px;
    
`

export const Autor = styled.div`
    font-weight: bold;
    color: ${(props) => props.cor}; 
    margin-bottom: 1px;
    
`

export const Texto = styled.p`
    padding-top: 5px;
    word-wrap:break-word;
`

export const Horario = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 12px;
`