import React, {useCallback} from "react";
import {connect} from "react-redux";
import {changePlayer} from "../store/board/actions/changePlayer.js";
import {updateBoard} from "../store/board/actions/updateBoard.js";
import {createStructuredSelector} from "reselect";
import {board, currentPlayer, winner} from "../store/board/selectors.js";

function Square({board, currentPlayer, changePlayer, updateBoard, index, winner}) {
    const step = useCallback(() => {
        if (winner !== null || board[index]) {
            return;
        }

        updateBoard(index, currentPlayer);
        changePlayer(currentPlayer);
    }, [currentPlayer, board, winner, index])

    return (
        <button className="square" onClick={step}>
            {board[index]}
        </button>
    );
}

const mapStateToProps = createStructuredSelector({
    board,
    currentPlayer,
    winner
});

const mapDispatchToProps = {
    updateBoard,
    changePlayer,
};

export default connect(mapStateToProps, mapDispatchToProps)(Square);