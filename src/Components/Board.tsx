import React, { useState } from "react";
import { Cell } from "./Cell";

export const Board = () => {
  // Array(9).fill(null) fills array with 9 "null" values
  const initialState = Array(9).fill(null);
  // board state
  const [boardCells, setBoardCells] = useState(initialState);
  // turn state
  const [xIsNext, setTurn] = useState(true);

  const handleClick = (index: any) => {
    // copy of board state
    const cells = [...boardCells];
    // if the index of the board is filled, then return, because it should not be clickable if it's already clicked
    if (cells[index]) return;
    // add "X" or "O"
    cells[index] = xIsNext ? "X" : "O";
    //calculate next turn

    // set the state of the board
    setBoardCells(cells);
    // set the state of the turn
    setTurn(!xIsNext);
  };

  // seperate function for rendering the cell
  // take in an index
  // return cell with the correct value and function
  const renderCell = (index: any) => {
      console.log(boardCells[index]);
    return (
      <Cell value={boardCells[index]} onClick={() => handleClick(index)} />
    );
  };
  // create board
  return (
    <div>
      <div className="game-container">
        {renderCell(0)}
        {renderCell(1)}
        {renderCell(2)}
        {renderCell(3)}
        {renderCell(4)}
        {renderCell(5)}
        {renderCell(6)}
        {renderCell(7)}
        {renderCell(8)}
      </div>
      <button className="reset" onClick={() => {
          setBoardCells(initialState)
      }}>Reset game</button>
    </div>
  );
};
