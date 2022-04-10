import React from "react";
import { StyledCell } from './styles/StyledCell'
import { TETRIMINOS } from '../tetrominos'

function Cell({ type }) {

    return(
    <StyledCell type={type} color={TETRIMINOS[type].color} >Cell</StyledCell>
    )
}

export default Cell;