import './Comments.css'
import Comment from "../comment/Comment";
import {useEffect, useState} from "react";
import {getComments} from "../../service/comments.service";

export default function Comments({id}) {
    let [comments, setComments] = useState([]);

    useEffect(() => {
        getComments(id).then(value => setComments([...value]))
    }, [])

    return (
        <div className={'comments'}>
            <h5>comments</h5>
            <ul>
                {
                    comments.map(comment => <Comment key={comment.id} comment={comment}/>)
                }
            </ul>
        </div>
    );
}