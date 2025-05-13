import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import './AddUser.css';
import AddUser from './Components/AddUser';
import AllUsers from './Components/AllUsers';

function App() {

  const [addUser, setAddUser] = useState(false);
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  async function fetchUser() {
    try {
      const response = await axios.get('https://localhost:7141/api/user/all');
      setUsers(response.data);
    } catch (error) {
      throw new Error('Data not fouud!!!');
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  function handleAddUser() {
    setAddUser(true);
  }

  function handleUserAdded() {
    fetchUser();
    setAddUser(false);
  }

  async function handelDelete(id) {

    const result = window.confirm("Are you sure you want to delete this user?");
    if(result){
      try {
        await axios.delete(`https://localhost:7141/api/user/deleteUser/${id}`);
        fetchUser();
      } catch (error) {
        alert("USer not deleted!!!");
      }
    }
  }

  function handleEdit(user) {
    setEditingUser(user);
    setAddUser(true);
  }


  return (
    <div className="App">
      <div>
        <AllUsers users={users} onDelete = {handelDelete} onEdit = {handleEdit} />
      </div>
      <div>
        <button onClick={handleAddUser}>Add User</button>
        <div>
          {addUser && <AddUser onUserAdded={handleUserAdded} editingUser={editingUser}/>}
        </div>
      </div>
    </div>
  );
}

export default App;
