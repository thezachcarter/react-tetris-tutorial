import React, { useState } from "react";
import { createStage } from "../gameHelpers";

//components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

//styled components
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';

//custom hooks
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';

function Tetris() {

    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [player, updatePlayerPos, resetPlayer] = usePlayer();
    const [stage, setStage] = useStage(player);

    console.log('re-render');

    const movePlayer = (dir) => {
        updatePlayerPos({ x: dir, y: 0})
    }

    const startGame = () => {
        setStage(createStage());
        resetPlayer();
    }

    const drop = () => {
        updatePlayerPos({ x:0, y:1, collided: false});
    }

    const dropPlayer = () => {
        drop();
    } 

    //key codes: 37 = left arrow, 39 = right arrow, 40 = down arrow 
    const move = ({keycode}) => {
        if(!gameOver){
            if(keycode === 37) {
                movePlayer(-1);
            } else if(keycode === 39){
                movePlayer(1);
            } else if(keycode === 40){
                dropPlayer();
            }
        }

    }

    return(
        <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
            <StyledTetris>
            <Stage stage={stage}/>
                <aside>
                    {gameOver ? 
                    (<Display gameOver={gameOver} text="Game Over"/> )
                    :
                    (<div>
                        <Display text="Score"/>
                        <Display text="Rows"/>
                        <Display text="Level"/>
                    </div>)
                    }
                    <StartButton onClick={startGame}/>
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}

export default Tetris;