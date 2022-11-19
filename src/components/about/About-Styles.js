import styled from "styled-components";

const AboutDiv = styled.div`
    margin-left: 20em;
    top: 0em;
    right: 0em;
    position: absolute;
    z-index: 1;
    
`

const AboutTitle = styled.h1`
    font-size: 5em;
    margin-left: 1em;
    margin-top: 1.5em;
`

const AboutBlurb = styled.p`
    margin-left: 3.9em;
    font-size: 1.25em;
    width: 40%;
`

const AboutImg = styled.img`
    position: absolute;
    top: 0em;
    right: 0em;
    margin-left: 7em;
    max-width: 30%;
    z-index = 0;
`
const DivRow = styled.div`
    display: flex;
    align-items: center;
`
export {AboutDiv,AboutTitle,AboutBlurb,AboutImg,DivRow};