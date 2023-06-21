import styled from "styled-components";

const AboutDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 18.5em;
  margin-top: 1em;
  margin-right: 1em;
  padding-top: 0.01em;
  padding-bottom: 3em;
  border-radius: 2em;
  background-color: #dcc7aa;
`;

const AboutTitle = styled.h1`
  font-size: 5em;
  margin-left: 1em;
  margin-top: 0.7em;
`;

const AboutBlurb = styled.p`
  margin-left: 3.3em;
  font-size: 1.6em;
  width: 90%;
  margin-bottom: 1.3em;
`;

const DivRow = styled.div`
  display: flex;
  align-items: flex-start;
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
export { AboutDiv, AboutTitle, AboutBlurb, DivRow, TextDiv };
