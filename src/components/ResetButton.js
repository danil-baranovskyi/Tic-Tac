import React from "react";
import {connect} from "react-redux";
import {resetBoard} from "../store/board/actions/resetBoard.js";

const ResetButton = ({resetBoard}) => {
    return (
        <div className="side-bar">
            <button onClick={resetBoard}>
                New Game
            </button>
        </div>
    );
}

const mapDispatchToProps = {
    resetBoard,
}

export default connect(null, mapDispatchToProps)(ResetButton)



