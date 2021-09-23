import {useState} from "react";
import './CreateTodoForm.css';

export default function CreateTodoForm({onSubmit}) {
    const [form, setForm] = useState({title: '', description: ''});

    const onchange = ({target}) => {
        setForm({...form, [target.name]: target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.title || !form.description) return;

        onSubmit(form);
        setForm({title: '', description: ''});
    }
    return (
        <form onSubmit={handleSubmit} className={'form'}>
            <input type="text" value={form.title} onChange={onchange} name={'title'} placeholder='todo title'/>
            <input type="text" value={form.description}  onChange={onchange} name={'description'} placeholder='todo description'/>
            <button type='submit' disabled={!form.title || !form.description}>create todo</button>
        </form>
    );
}