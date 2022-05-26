import GoogleButton from 'react-google-button'
import styled from 'styled-components'
export const Container = styled.div`
    display: flex;

    width: 100%;
    justify-content: center;
    padding: 30px;
    @media (max-width:960px){
        height: 100%;
        flex-direction: column;
    }

`

export const LoginRow = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
    width: 50%;
    @media (max-width:960px){
        margin: auto;
        margin-top: 30%;
        padding: 10px;
        width: 100%;
    }
    text-align: center;
`

export const Title = styled.h1`
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 60px;
    color: #333;
    
`
export const Description = styled.p`

    font-size: 18px;
    color: #333;

`

export const ButtonGoogle = styled(GoogleButton)`
    margin: auto;
    margin-top: 20px;

`	
export const ButtonGit = styled.a`
    position:fixed;
    bottom:0px;
    width:100%;
    text-align: center;
    padding: 25px;
`