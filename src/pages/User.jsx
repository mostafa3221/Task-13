import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/User.css'; 
import Nav from '../components/Nav';

function User() {
  const [users, setUsers] = useState([]); 

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []); 
  if (users.length === 0) {
  return <div className="container"><h2>Loading user details...</h2></div>;
}

  return (
    <>
    <div className="user-container container">
      <h2>Users List</h2>
      <ul className="users-list">
        {users.map(user => (
          <li key={user.id} className="user-list-item">
            <Link to={`/User/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default User;