import styled from 'styled-components'

export const Grid = styled.div`
    display: grid;

    grid-template-columns: 240px auto;
    grid-template-rows: 59px auto;
    
    @media screen and (min-width: 501px){
        grid-template-columns: 20% auto;
        grid-template-rows: 50px auto;
    }    
    @media screen and (max-width: 500px){
        grid-template-columns: 240px auto;
        grid-template-rows: 50px auto;
    }
    
    grid-template-areas:
            'UI CI' 
            'CL CM'
            'CL CM'
    ;
    height: 100vh;
`