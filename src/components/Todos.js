import './Todos.css';
import Todo from "./Todo";

export default function Todos({todos}) {
    return (
        <div className={'todos'}>
            {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
        </div>
    );
}