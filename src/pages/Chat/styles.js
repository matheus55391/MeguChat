import styled from 'styled-components'

export const Grid = styled.div`
    display: grid;
    
    grid-template-rows: 55px auto;
    
    grid-template-areas:
            'CI' 
            'CM'
            'CM'
    ;
    height: 100vh;
`