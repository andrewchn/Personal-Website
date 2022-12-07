import React, { Component } from "react";
import { CanvasDiv, CanvasButton, ButtonDiv, CanvasTitle } from "./Canvas-Styles.js"

import CanvasDraw from "react-canvas-draw";

class Canvas extends Component {
  state = {
    color: "black",
    width: 400,
    height: 400,
    brushRadius: 10,
    lazyRadius: 12,
  };

  render() {
    return (
      <CanvasDiv>
        <CanvasTitle>Send me a Doodle!</CanvasTitle>
        <CanvasDraw
          ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
          hideInterface
          brushColor={this.state.color}
          brushRadius={this.state.brushRadius}
          canvasWidth={this.state.width}
          canvasHeight={this.state.height}
        />
        <ButtonDiv>
          <CanvasButton
            onClick={() => {
              localStorage.setItem(
                "savedDrawing",
                this.saveableCanvas.getSaveData()
              );
            }}
          >
            Save
          </CanvasButton>
          <CanvasButton
            onClick={() => {
              this.saveableCanvas.eraseAll();
            }}
          >
            Erase
          </CanvasButton>
          <CanvasButton
            onClick={() => {
              this.saveableCanvas.undo();
            }}
          >
            Undo
          </CanvasButton>
        </ButtonDiv>
      </CanvasDiv>
    );
  }
}

export default Canvas;