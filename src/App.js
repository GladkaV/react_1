import './App.css';
import {useDispatch, useSelector} from "react-redux";
import CreateTodoForm from "./components/CreateTodoForm";
import Todos from "./components/Todos";
import {addTodod} from "./redux/action";

function App() {
    const todos = useSelector(store => store.todosReducer.todos);
    const dispatch = useDispatch();

    const onTodoCreate = (form) => {
        if (!form.title || !form.description) return;

        if (todos.length === 0) {
            form.id = todos.length + 1;
        } else {
            form.id = todos[todos.length - 1].id + 1;
        }

        dispatch(addTodod(form));
    }

    return (
        <div className={'app'}>
            <h1>Todo list</h1>
            <CreateTodoForm onSubmit={onTodoCreate}/>
            <Todos todos={todos}/>
        </div>
    );
}

export default App;

// https://www.youtube.com/watch?v=Ku_bEumRAlk&ab_channel=OktenSchool