import axios from "axios";
import { useEffect, useState } from "react";

export default function AddUser({ onUserAdded, editingUser }) {

    const [username, setUsername] = useState('User Name');
    const [userEmail, setEmail] = useState('User Email');

    useEffect(() => {
        if (editingUser) {
            setUsername(editingUser.name);
            setEmail(editingUser.email);
        }
        else {
            setUsername('');
            setEmail('');
        }

    }, [editingUser])

    async function handelSubmit(e) {
        e.preventDefault();
        try {
            if (editingUser) {
                await axios.put(`https://localhost:7141/api/user/updateUser/${editingUser.id}`, {
                    Name: username,
                    Email: userEmail
                });
            }
            else {
                await axios.post('https://localhost:7141/api/user/add', {
                    Name: username,
                    Email: userEmail
                });
            }
            alert("User Added Sucessfully...");
            setUsername('');
            setEmail('');
            onUserAdded();
        } catch (error) {
            alert("user not added!!!");
        }
    }

    return (
        <div>
            <h3>Add User</h3>
            <form onSubmit={handelSubmit} style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={userEmail}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}