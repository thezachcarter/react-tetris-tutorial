import React from "react";
import Cell from "./Cell";

function Stage({ stage }) {
    console.log(stage);
    return(
    <div>
        {/* //first loop through array of height/columns (which contains arrays based on width/rows)
        //second loop through row arrays, assigning cell keys to all positions
        //see stage.js for better understanding of array structure */}
        {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]}/>))}    
    </div>
    )
}

export default Stage;