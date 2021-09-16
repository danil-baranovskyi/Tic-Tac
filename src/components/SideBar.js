import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {winner} from "../store/selectors/boardSelector.js";

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

// const mapStateToProps = state => {
//     return {
//         winner: state.board.winner
//     }
// }

const mapStateToProps = createStructuredSelector({
    winner: winner,
})

export default connect(mapStateToProps)(SideBar)



