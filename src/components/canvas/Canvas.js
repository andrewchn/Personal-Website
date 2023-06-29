import React, { Component } from "react";

import {
  CanvasDiv,
  CanvasButton,
  ButtonDiv,
  CanvasTitle,
} from "./Canvas-Styles.js";

import CanvasDraw from "react-canvas-draw";

class Canvas extends Component {
  state = {
    color: "black",
    width: 350,
    height: 350,
    brushRadius: 10,
    lazyRadius: 12,
    sent: false,
    sentMessage: "Send me a Doodle!",
    disabled: false,
  };

  
  render() {
    return (
      <CanvasDiv>
        <CanvasTitle>{this.state.sentMessage}</CanvasTitle>
        <CanvasDraw
          ref={(canvasDraw) => (this.saveableCanvas = canvasDraw)}
          hideInterface
          brushColor={this.state.color}
          brushRadius={this.state.brushRadius}
          canvasWidth={this.state.width}
          canvasHeight={this.state.height}
          disabled={this.state.disabled}
        />
        <ButtonDiv>
          <CanvasButton
            onClick={() => {
              // localStorage.setItem(
              //   "savedDrawing",
              //   this.saveableCanvas.getSaveData()
              // );
              if (!this.state.sent) {
                this.saveableCanvas.eraseAll();
                this.setState({sentMessage: "No more Doodles!", sent: true, disabled: true});
              }
            }}
          >
            SEND
          </CanvasButton>
          <CanvasButton
            onClick={() => {
              this.saveableCanvas.eraseAll();
            }}
          >
            ERASE
          </CanvasButton>
          <CanvasButton
            onClick={() => {
              if (!this.state.sent) {
                this.saveableCanvas.undo();
              }
            }}
          >
            UNDO
          </CanvasButton>
        </ButtonDiv>
      </CanvasDiv>
    );
  }
}

export default Canvas;
