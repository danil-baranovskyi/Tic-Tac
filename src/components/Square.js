import React, {useCallback, useState} from "react";

export function Square(props) {
    const [btnValue, setBtnValue] = useState('')

    const setValue = useCallback(() => {
        setBtnValue( state => "X" )
    }, [btnValue])

    return (
        <button className="square" onClick={setValue}>
            {btnValue}
        </button>
    );
}

