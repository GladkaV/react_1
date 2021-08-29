import {
    Link,
} from 'react-router-dom';


export default function Post({post, url}) {

    return (
        <div>
            Post: {post.id}
            <div>
                <Link to={{pathname: url + '/' + post.id, state: post}}>details</Link>
            </div>
        </div>
    );
}