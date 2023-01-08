import styled from "styled-components";

const AboutDiv = styled.div`
    margin-left: 18.5em;    
    margin-top: 1em;
    margin-right: 1em;
    padding-top: 0.01em;
    padding-bottom: 3em;
    border-radius: 2em;
    background-color: #b8d8d8;
`

const AboutTitle = styled.h1`
    font-size: 5em;
    margin-left: 1em;
    margin-top: 0.7em;
`

const AboutBlurb = styled.p`
    margin-left: 3.9em;
    font-size: 1.4em;
    width: 90%;
    margin-bottom: 1.3em;
`

const AboutQuote = styled.div`
    text-align: right;
    margin-left: 4em;
    font-size: 2.1em;
    font-style: italic;
    font-weight: bold;
`

const QuoteDiv = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1.5em;
    margin-top: 4em;
    background-color: #ff8360;
    margin-left: 5.5em;
    padding: 1em 3em 1em 0em;
    border-radius: 2em;
`

const QuoteImg = styled.img`
    margin-left: 7em;
    max-width: 8%;
    margin-left: 91%
`
const DivRow = styled.div`
    display: flex;
    align-items: flex-start;
`

const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
`
export { AboutDiv, AboutTitle, AboutBlurb, QuoteImg, DivRow, TextDiv, AboutQuote, QuoteDiv };