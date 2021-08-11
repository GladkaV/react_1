import './Components.css'
import {useEffect, useState} from "react";
import {getComments} from "../../service/comments.service";
import Comment from "../comment/Comment";
import {getAxioComments} from "../../service/comments.service.axios";

export default function Comments() {
    let [comments, setComments] = useState([]);

    useEffect(() => {
        // getComments().then(value => setComments([...value]));
        getAxioComments().then(({data}) => setComments([...data]))
    }, []);

    return (
        <ul className={'components'}>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment} />)
            }
        </ul>
    );
}