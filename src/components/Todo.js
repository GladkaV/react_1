import {useDispatch} from "react-redux";
import {deleteTodo} from "../redux/action";

export default function Todo({todo}) {
    const dispatch = useDispatch();

    const onclick = () => {
        dispatch(deleteTodo(todo.id));
    }

    return (
        <div className={'todo'}>
            <div>{todo.title}</div>
            <div>{todo.description}</div>
            <button onClick={onclick}>x</button>
        </div>
    );
}