import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../styles/UserDetails.css';
import Nav from "../components/Nav";
const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null); // Initialize with null to handle loading state

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user:", error));
  }, [id]);

  if (!user) {
    return <div className="container"><h2>Loading user details...</h2></div>;
  }

  return (
    <>
    <div className="user-details-container container">
      <h2>{user.name}</h2>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p>
        <strong>Website:</strong> {user.website}
      </p>
      <p>
        <strong>Company:</strong> {user.company?.name}
      </p>
    </div>
    </>
  );
};

export default UserDetails;
