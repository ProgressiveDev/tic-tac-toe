import React from "react";
import "./App.css";
import { Board } from "./Components/Board";

const App: React.FC = () => {

  return (
    <div className="App">
      <h1>Tic-Tac-Toe</h1>
      <p>JUST START CLICKING</p>
      <Board />
    </div>
  );
};

export default App;

// Cell
  // value (prop)
  // onClick function (prop)

// Board
  // state - State of the board and whose turn it is
    //boardState
    //turnState
  // handleClick
    // copy of board state
    // mutate that copy, and add X or O
    // calculate next turn
    // set the state of the board
    // set the state of the turn

  // function that calcualtes the winner