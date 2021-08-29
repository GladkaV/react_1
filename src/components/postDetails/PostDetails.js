import './PostDetails.css';

export default function PostDetails({location: {state}}) {
    return (
        <div className={'post-details'}>
            <div><span>id:</span>{state.id}</div>
            <div><span>title:</span>{state.title}</div>
            <div><span>body:</span>{state.body}</div>
        </div>
    );
}