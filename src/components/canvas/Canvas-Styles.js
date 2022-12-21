import styled from "styled-components";

const CanvasDiv = styled.div`
  margin-left: 6em;
  margin-right: 3em;
`;

const CanvasButton = styled.button`
    margin-top: 0.5em;
    margin-left: 1em;
    margin-right: 1em;
    font-family: "Lato", sans-serif;
    font-size: 1em;
    :hover {
      box-shadow: inset 150px 0 0 0 black;
      color: white;
    }
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CanvasTitle = styled.h1`
  text-align: center;
`;

export { CanvasDiv, CanvasButton, ButtonDiv, CanvasTitle };
