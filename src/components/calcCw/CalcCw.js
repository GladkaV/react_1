import {useReducer} from "react";

const reducer = (state, action) => {
    let element = action.obj;

    switch (action.act) {
        case '+':
            return {...state, [element]: state[element]++}
        case '-':
            return {...state, [element]: state[element]--}
        default:
            return {...state};
    }
}

export default function CalcCw() {
    let [{a, b, c}, dispatch] = useReducer(reducer, {a: 0, b: 0, c: 0});

    return (
        <div>
            <h2>Classwork</h2>

            <div className={'calc-cw'}>
                <div>
                    <h3>result: {a}</h3>
                    <button onClick={() => dispatch({obj: 'a', act: '+'})}>+</button>
                    <button onClick={() => dispatch({obj: 'a', act: '-'})}>-</button>
                </div>

                <div>
                    <h3>result: {b}</h3>
                    <button onClick={() => dispatch({obj: 'b', act: '+'})}>+</button>
                    <button onClick={() => dispatch({obj: 'b', act: '-'})}>-</button>
                </div>

                <div>
                    <h3>result: {c}</h3>
                    <button onClick={() => dispatch({obj: 'c', act: '+'})}>+</button>
                    <button onClick={() => dispatch({obj: 'c', act: '-'})}>-</button>
                </div>
            </div>
        </div>
    );
}