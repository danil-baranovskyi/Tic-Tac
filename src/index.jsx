import React, {useCallback, useState} from 'react';
import ReactDOM from 'react-dom';
import "./styles/main.scss";
import Game from "./components/Game.js";
import {Provider} from "react-redux";
import store from "./store/store.js";

ReactDOM.render(
    <Provider store={store}>
        <Game/>
    </Provider>,
    document.getElementById("root")
);