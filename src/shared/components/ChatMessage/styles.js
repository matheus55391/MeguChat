import styled from 'styled-components'

export const Container = styled.div`
    background-color: #ece5dd;  
    grid-area: CM;
    display: flex;
    flex-direction: column;    
    justify-content:space-between;
`

export const MensagerPacote = styled.div`
    background-color: red;
    display: flex;
    flex-direction: column;
    max-height: calc(100vh - 46px - 68px);
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 8px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: var(--tertiary);
        border-radius: 4px;
    }
    ::-webkit-scrollbar-track {
        background-color: var(--secondary);
    }
`

export const InputPacote = styled.div`
    display: flex;
    

`
export const Input = styled.input`
    width: 100%;
    height: 44px;
    padding: 0 10px 0 25px;
    
    border-radius: 7px;
    color: gray;
    background: #FFFFFF;
    position: relative;
    &::placeholder{
        color: var(--gray);
    }
    ~ svg {
        position: relative;
        top: -50%;
        left: 14px;
        transition: 180ms ease-in-out;
    }
`