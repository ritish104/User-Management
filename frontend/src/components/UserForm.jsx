import React, { useState } from 'react';
import { addUser, updateUser } from '../services/api';
import './UserForm.css';

const UserForm = ({ selectedUser, onUserAdded, onUserUpdated }) => {
  const [formData, setFormData] = useState({
    name: selectedUser ? selectedUser.name : '',
    email: selectedUser ? selectedUser.email : '',
    dob: selectedUser ? selectedUser.dob : '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedUser) {
      updateUser(selectedUser.id, formData).then(() => onUserUpdated());
    } else {
      addUser(formData).then(() => onUserAdded());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
        required
      />
      <button type="submit">{selectedUser ? 'Update User' : 'Add User'}</button>
    </form>
  );
};

export default UserForm;
