import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../services/api';
import './UserList.css';

const UserList = ({ onEditUser }) => {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    getUsers().then((response) => setUsers(response.data));
  };

  const handleDelete = (id) => {
    deleteUser(id).then(() => fetchUsers());
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="user-list">
      <h2>Registered Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <span>{user.name} - {user.email} - {user.dob}</span>
            <button onClick={() => onEditUser(user)}>Edit</button>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
