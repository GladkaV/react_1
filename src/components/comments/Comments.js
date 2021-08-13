import Comment from "../comment/Comment";
import {useState} from "react";
import './Comments.css';

export default function Comments({comments}) {
    let [comment, setComment] = useState(null);

    let showComment = comment => {
        setComment(comment)
    }

    return (
        <div>
            <h3>Comments</h3>
            <div className={'comments'}>

                {comments.map(comment => (
                    <Comment
                        key={comment.id}
                        comment={comment}
                        showComment={showComment}
                    />))}
            </div>

            {
                comment &&
                <div className={'comment-descr'}>
                    <div className={'email'}>email: {comment.email}</div>
                    <div>{comment.name}</div>
                    <div>{comment.body}</div>
                </div>
            }
        </div>
    );
}