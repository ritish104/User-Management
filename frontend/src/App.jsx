import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import './App.css';

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserAdded = () => {
    setSelectedUser(null);
  };

  const handleUserUpdated = () => {
    setSelectedUser(null);
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="app-container">
      <h1>User Management</h1>
      <UserForm
        selectedUser={selectedUser}
        onUserAdded={handleUserAdded}
        onUserUpdated={handleUserUpdated}
      />
      <UserList onEditUser={handleEditUser} />
    </div>
  );
};

export default App;
