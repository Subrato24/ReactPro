import '../AllUsers.css';
export default function AllUsers({ users, onDelete, onEdit }) {

    return (
        <div>
            <h2>All Users</h2>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length === 0 ? (
                        <tr>
                            <td colSpan="3" style={{ textAlign: 'center' }}>No users found.</td>
                        </tr>
                    ) : (
                        users.map((user, index) => (
                            <tr key={user.id}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button onClick={() => onDelete(user.id)}>Delete</button>
                                    <button onClick={()=> onEdit(user)}>Edit</button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    )
}