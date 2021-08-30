import {useReducer} from "react";

const reducer = (state, action) => {
    switch (action) {
        case '+':
            return state += 10;
        case '-':
            return state -= 2;
        default:
            return state;
    }
}

export default function Calc() {
    let [state, dispatch] = useReducer(reducer, 0);

    return (
        <div className={'calc-hw'}>
            <h2>Homework</h2>
            <h3>result: {state}</h3>
            <button onClick={() => dispatch('+')}>+ 10</button>
            <button onClick={() => dispatch('-')}>- 2</button>
        </div>
    );
}