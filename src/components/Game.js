import Board from "./Board.js";
import React from "react";
import SideBar from "./SideBar.js";
import ResetButton from "./ResetButton.js";

const Game = () => {
    return (
        <React.Fragment>
            <Board />
            <SideBar />
            <ResetButton/>
        </React.Fragment>
    );
}

export default Game;