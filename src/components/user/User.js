export default function User({user}) {
    return (
        <option value={user.id}>
            {user.name}
        </option>
    );
}