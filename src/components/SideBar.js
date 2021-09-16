import React from "react";
import {connect} from "react-redux";

const SideBar = ({winner}) => {
    return (
        <div className="side-bar">
            <h2>
                {winner === '' && ("Winner is nobody")}
                {winner && (`Winner is ${winner}`)}
            </h2>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        winner: state.board.winner
    }
}

export default connect(mapStateToProps)(SideBar)



