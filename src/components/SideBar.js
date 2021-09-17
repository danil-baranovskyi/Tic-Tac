import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {winner} from "../store/board/selectors.js";

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

const mapStateToProps = createStructuredSelector({
    winner,
})

// noinspection JSCheckFunctionSignatures
export default connect(mapStateToProps)(SideBar)



