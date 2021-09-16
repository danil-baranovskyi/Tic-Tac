import React, {useCallback} from "react";
import {connect} from "react-redux";
import {resetBoard} from "../store/actions/resetBoard.js";

const ResetButton = ({resetBoard}) => {

    const reset = useCallback(() => {
        resetBoard();
    }, [])

    return (
        <div className="side-bar">
            <button onClick={reset}>
                New Game
            </button>
        </div>
    );
}

const mapDispatchToProps = {
    resetBoard,
}

export default connect(null, mapDispatchToProps)(ResetButton)



