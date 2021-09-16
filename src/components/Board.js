import Square from "./Square.js";
import React, {useMemo} from "react";

const Board = () => {
    const rows = useMemo(() => {
        let index = 0;
        const rows = [];

        for (let i = 0; i < 3; i++) {
            const cols = [];

            for (let y = 0; y < 3; y++) {
                cols.push(<Square key={index} index={index} />)
                index++;
            }

            rows.push((
                <div key={i} className="board-row">
                    {cols}
                </div>
            ));
        }

        return rows;
    }, []);

    return (
        <div>
            {rows}
        </div>
    );

}

export default Board;