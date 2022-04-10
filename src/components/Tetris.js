import React from "react";

//components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

import { createStage } from '../gameHelpers'
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris'

function Tetris() {

    console.log(createStage());

    return(
        <StyledTetrisWrapper>
            <StyledTetris>
            <Stage stage={createStage()}/>
                <aside>
                    <div>
                        <Display text="Score"/>
                        <Display text="Rows"/>
                        <Display text="Level"/>
                    </div>
                    <StartButton />
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}

export default Tetris;