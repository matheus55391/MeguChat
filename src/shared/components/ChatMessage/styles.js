import styled from 'styled-components'
import { EmojiHand } from '@styled-icons/fluentui-system-regular/EmojiHand'
import { PaperPlane } from '@styled-icons/boxicons-solid/PaperPlane'
import ScrollableFeed from 'react-scrollable-feed'
export const Container = styled.div`
    background-color: #ece5dd;  
    grid-area: CM;
    display: flex;
    flex-direction: column;    
    justify-content:space-between;
    border-left: 2px solid rgba(28,110,164,0.45);
`

export const MensagemArea = styled(ScrollableFeed)`
    display: flex;
    flex-direction: column;
    max-height: calc(100vh - 46px - 68px);
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 0px;
    }
    padding-bottom: 5px;
`

export const InputArea = styled.div`
    display: flex;
    flex-direction: row;
    height: 50px;
    background-color: #F0F2F5;
    align-items: center;
    justify-content:center;
    padding: 5px 10px;    

`
export const Input = styled.input`
    width: 100%;
    height: 100%;
    padding: 0 10px 0 18px;    

    color: gray;
    background: #FFFFFF;
    position: relative;
    border-radius: 8px;
    &::placeholder{
        color: var(--gray);
    }

`

export const EmojiButton = styled(EmojiHand)`
    width: 35px;
    margin: 0px 15px 0px 0px ;
    color: gray;
    :hover{
        color: black;
    }
    cursor: pointer;
`

export const SandButton = styled(PaperPlane)`
    width: 30px;
    margin: 0px 5px 0px 10px ;
    color: gray;
    :hover{
        color: black;
    }
    cursor: pointer;
    
`
